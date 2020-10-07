/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import AxiosHttpClient from './http-client';
import { HttpMethod, HttpResponse } from '../types';
import { API_DOMAIN, STORE_ID } from '../constants';

type RequestParams = {
  route: string;
  method?: HttpMethod;
  params?: { page?: number; filter?: string; category?: string };
  body?: any;
};

const RequestBase = async ({
  route,
  method,
  params,
  body,
}: RequestParams): Promise<HttpResponse> => {
  return new AxiosHttpClient({
    url: `${API_DOMAIN}/${route}`,
    method: method || 'get',
    params: {
      store_id: STORE_ID,
      ...params,
    },
    body,
  }).request();
};

export default RequestBase;
