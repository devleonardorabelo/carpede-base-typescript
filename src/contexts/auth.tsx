import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import loadCostumer from '../services/auth';
import { ContextProvider, Customer } from '../types';

const AuthContext = createContext<ContextProvider>({ signed: false, customer: null });

export const AuthProvider: React.FC = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  const saveCustomer = (current: Customer) => {
    const { name, whatsapp, address, complement, number, latitude, longitude } = current;

    return setCustomer({
      name,
      whatsapp,
      address,
      complement,
      number,
      latitude,
      longitude,
    });
  };

  const signIn = async () => {
    const user = await loadCostumer();
    if (user) saveCustomer(user);
  };
  const signUp = async (newCustomer: Customer) => {
    saveCustomer(newCustomer);
    try {
      await AsyncStorage.setItem('@Carpede:customer', JSON.stringify(newCustomer));
    } catch (err) {
      console.log(err);
    }
  };
  const signOut = async () => {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
    return setCustomer(null);
  };

  useEffect(() => {
    void signIn();
    console.log(customer);
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!customer, customer, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
