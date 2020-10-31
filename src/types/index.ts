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

export type ParamList = {
  List: {
    _id: string;
    name: string;
    filter?: string;
  };
  View: {
    _id: string;
    image: string;
    name: string;
    price: number;
    onSale: string;
    onSaleValue: number;
    description: string;
  };
  Location: {
    name: string;
    CPF: string;
    whatsapp: string;
  };
  ThirdStep: {
    name: string;
    CPF: string;
    whatsapp: string;
    latitude: string;
    longitude: string;
  };
};

export type TAuthContext = {
  signed: boolean;
  customer?: Customer | null;
  signIn: () => Promise<void> | void;
  signUp: (customer: Customer) => Promise<any> | void;
  signOut: () => Promise<void> | void;
};

export type TShopContext = {
  products: Product[];
  categories: Category[];
  onSale: Product[];
  bestSellers: Product[];
  loadProducts: ({ category, page, filter }: ProductSearch | any) => Promise<void> | any;
};

export type TOrderContext = {
  products: OrderProduct[];
  addProduct: (product: OrderProduct) => void;
  editProduct: (product: OrderProduct) => void;
  removeProduct: (product: OrderProduct) => void;
};

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

export type ProductSearch = {
  category: {
    _id: string;
    name: string;
  };
  page?: number;
  filter?: string;
};

export type OrderProduct = {
  product: Product;
  quantity: number;
  comments: string;
};
