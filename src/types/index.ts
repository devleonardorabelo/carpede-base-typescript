/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

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

export interface Product {
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
}

export interface Category {
  _id: string;
  image: string;
  name: string;
  store_id: string;
}

export interface Shop {
  products: Product[];
  categories: Category[];
}
