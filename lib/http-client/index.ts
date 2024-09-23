import clientEnv from '@/lib/env/clientEnv';
import { getToken } from '@/lib/session/universal';
import axios, { type AxiosInstance } from 'axios';
const httpClient: AxiosInstance = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

console.log(
  'initialized httpClient in ',
  typeof window === 'undefined' ? '[server]' : '[client]',
);

export default httpClient;
