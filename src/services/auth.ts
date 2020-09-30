/* eslint-disable @typescript-eslint/no-unsafe-return */
import AsyncStorage from '@react-native-community/async-storage';
import { Customer } from '../types';

const loadCustomer = async (): Promise<Customer | null> => {
  const customer = await AsyncStorage.getItem('@Carpede:customer');
  if (customer) return JSON.parse(customer);
  return null;
};

export default loadCustomer;
