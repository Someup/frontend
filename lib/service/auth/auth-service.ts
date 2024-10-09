import clientEnv from '@/lib/env/client-env';
import httpClient from '@/lib/http-client';
import token from '@/lib/service/auth/token';
import { LoginResponse, ReissueTokenResponse } from '@/types/auth-types';
import axios from 'axios';

export async function loginKakao(code: string) {
  return axios.post<LoginResponse>(
    `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/login/kakao?code=${code}`,
    undefined,
    {
      withCredentials: true,
    },
  );
}

export function logout() {
  const accessToken = token.accessToken.get();
  return axios.post<void>(
    `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
    null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    },
  );
}

export function reissueToken() {
  const accessToken = token.accessToken.get();
  return axios.get<ReissueTokenResponse>(
    `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/reissue`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    },
  );
}

export function withdrawAccount() {
  return httpClient.delete<void>('/auth/withdraw');
}
