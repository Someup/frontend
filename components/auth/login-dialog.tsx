'use client';
import ClosOutlined from '@/components/icons/CloseOutlined';
import Button from '@/components/ui/Button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/Dialog';
import clientEnv from '@/lib/env/client-env';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function LoginDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleLogin = async () => {
    const currentUrl = `${pathname}${searchParams.toString()}`;

    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${clientEnv.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${clientEnv.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code&state=${currentUrl}`,
    );
  };

  return (
    <DialogContent className="max-w-[600px] gap-6">
      <DialogHeader className="flex-col items-center">
        <div className="flex w-full justify-end">
          <DialogClose asChild>
            <Button variant="icon">
              <ClosOutlined className="h-6 w-6 text-gray-600" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>
        <Image src="/login_logo.png" alt="logo" width={500} height={200} />
        <DialogTitle className="mt-8">Welcome!</DialogTitle>
        <DialogDescription className="mt-4 text-center">
          로그인하여 Someup의 요약 옵션과 아카이빙 서비스를 이용해 보세요!
          <br />
          필요한 정보를 빠르고 쉽게 정리할 수 있습니다.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center px-6 pb-15">
        <button onClick={handleLogin}>
          <Image
            src="/kakao_login_large_wide.png"
            width={480}
            height={72}
            alt="kakao_login"
          />
        </button>
      </div>
    </DialogContent>
  );
}
