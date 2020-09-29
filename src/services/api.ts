import AxiosHttpClient from './http-client';
import { HttpMethod, HttpResponse } from '../types';
import { API_DOMAIN, STORE_ID } from '../constants';

const RequestBase = async (
  route: string,
  method?: HttpMethod,
  params?: { page?: number; filter?: string; category?: string },
): Promise<HttpResponse> => {
  return new AxiosHttpClient({
    url: `${API_DOMAIN}/${route}`,
    method: method || 'get',
    params: {
      store_id: STORE_ID,
      ...params,
    },
  }).request();
};

export default RequestBase;
