import clientEnv from '@/lib/env/clientEnv';
import httpClient from '@/lib/http-client';
import token from '@/lib/service/auth/token';
import { ReissueTokenResponse } from '@/types/AuthTypes';
import axios from 'axios';

export function logout() {
  return httpClient.post<void>('/auth/logout');
}

export function reissueToken() {
  const accessToken = token.accessToken.get();
  const refreshToken = token.refreshToken.get();
  return axios.get<ReissueTokenResponse>(
    `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/auth/reissue`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    },
  );
}
