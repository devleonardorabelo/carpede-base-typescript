import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './auth';

import { STORE_ID } from '../constants';
import { api } from '../services/api';

interface Product {
  
}

interface Order {}

interface StoreInfo {
  fees: {
    payment: number;
    delivery: number;
    operation: {
      opening: string;
      closure: string;
    };
  };
}

interface OrderContext {
  products: Product[];
  addProduct: (T: Product) => void;
  editProduct: (T: Product) => void;
  removeProduct: (T: Product) => void;
  calculateTotalValue: () => void;
  calculateTotalProducts: () => void;
  confirmOrder: (T: Order) => void;
  notifyStore: (T: number) => void;
  storeInfo: StoreInfo;
  open: boolean;
}

export const OrderContext = createContext<OrderContext | undefined>(undefined);

export const OrderProvider: React.FC = ({ children }) => {
  const { customer } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState({
    fees: {
      payment: 0,
      delivery: 0,
      operation: {
        opening: '00:00',
        closure: '00:00',
      },
    },
  });
  const [open, setOpen] = useState(true);

  const addProduct = (item: Product) => setProducts([...products, item]);

  const editProduct = (item) => {
    const index = products.findIndex((obj) => obj.product.idSelect === item.product.idSelect);
    products[index].quantity = item.quantity;
    products[index].notice = item.notice;
    setProducts([...products]);
  };

  const removeProduct = (item) => {
    const index = products.findIndex((obj) => obj.product.idSelect === item.product.idSelect);
    products.splice(index, 1);
    setProducts([...products]);
  };

  const calculateTotalValue = (fees = 0) => {
    const calculate = products.reduce(
      (total, each) => each.product.onSaleValue * each.quantity + total,
      0,
    );
    return calculate + storeInfo.fees.delivery + fees;
  };

  const calculateTotalProducts = () => {
    const calculate = products.reduce(
      (total, each) => each.product.onSaleValue * each.quantity + total,
      0,
    );
    return calculate;
  };

  const notifyStore = async (value) => {
    await axios.post('https://main.carpede.com/orders/notify', {
      title: 'Novo pedido',
      body: `Um novo pedido foi efetuado no valor de ${value}`,
      store_id: STORE_ID,
      to: 'store',
    });
  };

  const confirmOrder = async (order) => {
    const { name, whatsapp, address, complement, number } = customer;

    let payment;

    if (order.paymentMethod === 'card') {
      payment = {
        card: {
          method: order.method,
        },
      };
    } else {
      payment = {
        money: {
          amount: order.amount,
        },
      };
    }

    const model = {
      store_id: STORE_ID,
      customer: {
        name,
        whatsapp: whatsapp.raw,
        address,
        complement,
        number,
      },
      fees: {
        payment: order.method === 'credit' ? storeInfo.fees.payment : 0,
        delivery: storeInfo.fees.delivery,
      },
      value:
        order.method === 'credit'
          ? calculateTotalValue(storeInfo.fees.payment)
          : calculateTotalValue(),
      change: order.change,
      paymentMethod: payment,
      products,
      latitude: customer.latitude,
      longitude: customer.longitude,
    };

    const { data } = await api.post('order', model);

    if (data) {
      setProducts([]);
      notifyStore(model.value);
    }
  };

  const saveStoreInfo = async () => {
    const { data } = await api.get('/', {
      params: { store_id: STORE_ID },
    });
    if (data) setStoreInfo(data);
  };

  const checkOperation = async () => {
    const { opening } = storeInfo.operation;
    const { closure } = storeInfo.operation;

    const date = new Date();
    const currentHour = `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}`;

    if (currentHour < opening || currentHour > closure) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    saveStoreInfo();
  }, []);

  useEffect(() => {
    if (storeInfo.operation) {
      checkOperation();
    }
  }, [storeInfo]);

  return (
    <OrderContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        removeProduct,
        calculateTotalValue,
        calculateTotalProducts,
        confirmOrder,
        notifyStore,
        storeInfo,
        open,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
