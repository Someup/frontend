import httpClient from '@/lib/http-client';
import { reissueToken } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';
import { getAccessTokenUniversal } from '@/lib/service/auth/universal';
import {
  type AxiosResponse,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from 'axios';

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];

let isRefreshing = false;

export const requestHandler = (request: InternalAxiosRequestConfig) => {
  console.log('intercepting request', request);
  const token = getAccessTokenUniversal();
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

export const normalResponseHandler = (response: AxiosResponse<any, any>) => {
  return response;
};

export const errorResponseHandler = async (error: any) => {
  const originalRequest = error.config;
  console.log('intercepting response', error);
  if (error.status === 401 || error.status === 403) {
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        // reissue token
        const response = await reissueToken();

        if (response.status !== 200) {
          throw new Error('Failed to reissue token');
        }

        const { accessToken: newAccessToken } = response.data;

        // update token
        token.accessToken.set(newAccessToken);

        // update original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        // retry original request
        refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
          httpClient
            .request(config)
            .then((response) => resolve(response))
            .catch((err) => reject(err));
        });
        refreshAndRetryQueue.length = 0;

        // retry request
        return httpClient(originalRequest);
      } catch (error) {
        throw new Error('Failed to reissue token');
      } finally {
        // eslint-disable-next-line require-atomic-updates
        isRefreshing = false;
      }
    }

    return new Promise((resolve, reject) => {
      refreshAndRetryQueue.push({ resolve, reject, config: originalRequest });
    });
  }

  return Promise.reject(error);
};
