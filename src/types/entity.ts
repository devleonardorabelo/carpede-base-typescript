export type Customer = {
  name: string;
  CPF: string;
  whatsapp: string;
  address: string;
  complement: string;
  number: number;
  area: string;
  latitude: number;
  longitude: number;
};

export type Product = {
  _id: string;
  id?: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category?: Category;
  sold?: number;
  onSale: boolean;
  onSaleValue: number;
};

export type Category = {
  _id: string;
  image: string;
  name: string;
};

export type OrderProduct = {
  product: Product;
  quantity: number;
  comments: string;
};

export type StoreInfo = {
  averageDeliveryTime: string;
  fees: {
    delivery: number;
    payment: number;
  };
  operation: {
    closure: string;
    opening: string;
  };
  phone: string;
  whatsapp: string;
};
