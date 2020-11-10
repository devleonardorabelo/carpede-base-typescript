import React, { createContext, useEffect, useState } from 'react';
import { TOrderContext, OrderProduct } from '../types';

export const OrderContext = createContext<TOrderContext>({
  products: [],
  totalProducts: 0,
  addProduct: () => {},
  editProduct: () => {},
  removeProduct: () => {},
  resetOrder: () => {},
});

export const OrderProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<OrderProduct[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const addProduct = (item: OrderProduct) => setProducts([...products, item]);

  const editProduct = (item: OrderProduct) => {
    const index = products.findIndex((each) => each.product.id === item.product.id);
    products[index].quantity = item.quantity;
    products[index].comments = item.comments;
  };

  const removeProduct = (item: OrderProduct) => {
    const index = products.findIndex((each) => each.product.id === item.product.id);
    products.splice(index, 1);
    setProducts([...products]);
  };

  const calculateTotalProducts = () => {
    const calculate = products.reduce(
      (total, each) => each.product.onSaleValue * each.quantity + total,
      0,
    );
    setTotalProducts(calculate);
  };

  const resetOrder = () => setProducts([]);

  useEffect(() => {
    calculateTotalProducts();
  }, [products]);

  return (
    <OrderContext.Provider
      value={{
        products,
        totalProducts,
        addProduct,
        editProduct,
        removeProduct,
        resetOrder,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
