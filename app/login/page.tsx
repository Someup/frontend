import clientEnv from '@/lib/env/client-env';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지입니다.',
};

export default function LoginPage(): React.JSX.Element {
  return (
    <div>
      <h1>로그인</h1>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${clientEnv.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${clientEnv.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
      >
        <Image
          src="/kakao_login_medium_wide.png"
          alt="카카오 계정으로 로그인"
          width={300}
          height={45}
        />
      </a>
    </div>
  );
}
