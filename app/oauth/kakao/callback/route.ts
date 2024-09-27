import clientEnv from '@/lib/env/client-env';
import {
  accessTokenConfig,
  refreshTokenConfig,
} from '@/lib/service/auth/constants';
import { LoginResponse } from '@/types/auth-types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<void> {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const previousUrl = searchParams.get('state');
  const cookie = cookies();
  if (!code) {
    redirect('/login');
  }

  const response = await fetch(
    clientEnv.NEXT_PUBLIC_API_BASE_URL + '/auth/login/kakao?code=' + code,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    return redirect('/login');
  }

  const { accessToken, refreshToken } =
    (await response.json()) as LoginResponse;

  if (!accessToken || !refreshToken) {
    return redirect('/login');
  }

  cookie.set(accessTokenConfig.name, accessToken, {
    maxAge: accessTokenConfig.expiration,
    path: '/',
  });
  cookie.set(refreshTokenConfig.name, refreshToken, {
    maxAge: refreshTokenConfig.expiration,
    path: '/',
  });

  return redirect(previousUrl || '/');
}
