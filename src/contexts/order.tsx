import React, { createContext, useEffect } from 'react';

interface OrderContext {
  open: boolean;
}

export const OrderContext = createContext<OrderContext>({ open: true });

export const OrderProvider: React.FC = ({ children }) => {
  useEffect(() => {
    console.log('oi');
  }, []);

  return (
    <OrderContext.Provider
      value={{
        open: true,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
