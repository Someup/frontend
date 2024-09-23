import clientEnv from '@/lib/env/clientEnv';
import { setServerToken } from '@/lib/session/token';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<void> {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    redirect('/login');
  }

  const response = await fetch(
    clientEnv.NEXT_PUBLIC_API_BASE_URL + '/v1/auth/login/kakao?code=' + code,
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

  const { accessToken } = (await response.json()) as {
    accessToken: string;
  };

  if (!accessToken) {
    return redirect('/login');
  }

  setServerToken(accessToken);

  return redirect('/');
}
