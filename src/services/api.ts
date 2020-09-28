import AxiosHttpClient from './http-client';
import { HttpResponse } from '../types';
import { API_DOMAIN, STORE_ID } from '../constants';

const RequestBase = async (route: string): Promise<HttpResponse> => {
  return new AxiosHttpClient({
    url: `${API_DOMAIN}/${route}`,
    method: 'get',
    params: {
      store_id: STORE_ID,
    },
  }).request();
};

export default RequestBase;
