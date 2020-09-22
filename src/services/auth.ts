/* eslint-disable @typescript-eslint/no-unsafe-return */
import AsyncStorage from '@react-native-community/async-storage';

interface Customer {
  name: string;
  whatsapp: string;
  address: string;
  complement: string;
  number: number;
  latitude: number;
  longitude: number;
}

const loadCustomer = async (): Promise<Customer | null> => {
  const customer: string | null = await AsyncStorage.getItem('@Carpede:customer');
  if (customer) return JSON.parse(customer);
  return null;
};

export default loadCustomer;
