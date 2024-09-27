import clientEnv from '@/lib/env/client-env';
import {
  errorResponseHandler,
  normalResponseHandler,
  requestHandler,
} from '@/lib/http-client/interceptors';
import axios, { type AxiosInstance } from 'axios';
const httpClient: AxiosInstance = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

httpClient.interceptors.request.use(requestHandler);

httpClient.interceptors.response.use(
  normalResponseHandler,
  errorResponseHandler,
);

console.log(
  'initialized httpClient in ',
  typeof window === 'undefined' ? '[server]' : '[client]',
);

export default httpClient;
