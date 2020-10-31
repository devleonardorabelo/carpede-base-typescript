import React, { createContext, useEffect, useState } from 'react';
import { TOrderContext, OrderProduct } from '../types';

export const OrderContext = createContext<TOrderContext>({
  products: [],
  addProduct: () => {},
  editProduct: () => {},
  removeProduct: () => {},
});

export const OrderProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<OrderProduct[]>([]);

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

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <OrderContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        removeProduct,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
