import clientEnv from '@/lib/env/clientEnv';
import { createSession } from '@/lib/session';
import { UserProfileResponse } from '@/types/UserTypes';
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

  const profileResponse = await fetch(
    clientEnv.NEXT_PUBLIC_API_BASE_URL + '/users',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!profileResponse.ok) {
    return redirect('/login');
  }

  const profile = (await profileResponse.json()) as UserProfileResponse;

  const { success } = await createSession({
    id: profile.id,
    name: profile.name,
    email: profile.email,
    image: profile.profileImageUrl,
    token: accessToken,
  });

  if (!success) {
    return redirect('/login');
  }

  return redirect('/');
}
