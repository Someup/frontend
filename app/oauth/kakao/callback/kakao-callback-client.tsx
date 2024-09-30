'use client';
import { loginKakao } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function KakaoCallbackClient() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const previousUrl = searchParams.get('state');
  const router = useRouter();
  useEffect(() => {
    if (!code) {
      return router.push('/');
    }
    loginKakao(code)
      .then((res) => {
        const accessToken = res.data.accessToken;
        token.accessToken.set(accessToken);
        router.push(previousUrl || '/');
      })
      .catch(() => {
        router.push('/');
      });
  }, [code, previousUrl, router]);

  return <div>로그인 중</div>;
}
