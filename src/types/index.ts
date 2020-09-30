/* eslint-disable camelcase */

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  params?: any;
};

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export type HttpClient<R = any> = {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
};

export type Customer = {
  name: string;
  whatsapp: string;
  address: string;
  complement: string;
  number: number;
  latitude: number;
  longitude: number;
};

export type ContextProvider = {
  signed: boolean;
  customer?: Customer | null;
  signIn?: () => Promise<void>;
  signUp?: (customer: Customer) => Promise<void>;
  signOut?: () => Promise<void>;
};

export type Product = {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: {
    _id: string;
    image: string;
    name: string;
    store_id: string;
  };
  store_id: string;
  sold: number;
  onSale: boolean;
  onSaleValue: number;
};

export type Category = {
  _id: string;
  image: string;
  name: string;
  store_id: string;
};

export type ProductSearch = {
  category?: string;
  page?: number;
};

export type Shop = {
  products: Product[];
  categories: Category[];
  onSale: Product[];
  bestSellers: Product[];
  loadProducts?: ({ category, page }: ProductSearch) => Promise<void>;
};
