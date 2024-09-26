import clientEnv from '@/lib/env/clientEnv';
import token from '@/lib/service/auth/token';
import { LoginResponse } from '@/types/AuthTypes';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<void> {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

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

  token.accessToken.set(accessToken);
  token.refreshToken.set(refreshToken);

  return redirect('/');
}
