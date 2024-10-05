'use client';
import LoginDialog from '@/components/auth/login-dialog';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import TextButton from '@/components/ui/TextButton';
import UserButton from '@/components/user/user-button';
import { useUserProfile } from '@/lib/service/user/use-user-service';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, Suspense } from 'react';

const MainHeader: FunctionComponent = () => {
  const userQuery = useUserProfile();
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!isHome) {
    return (
      <div className="fixed z-50 flex h-15 w-full items-center justify-between bg-white px-6">
        <Image src="/header_logo.png" width={150} height={60} alt="logo" />
        {userQuery.data === undefined && (
          <Dialog>
            <DialogTrigger asChild>
              <TextButton>로그인</TextButton>
            </DialogTrigger>
            <Suspense>
              <LoginDialog />
            </Suspense>
          </Dialog>
        )}
      </div>
    );
  }

  if (userQuery.data) {
    return (
      <div className="fixed z-50 flex h-17 w-full items-center justify-between bg-white px-6">
        <UserButton user={userQuery.data} />
        <nav className="flex items-center gap-4">
          <TextButton>소개</TextButton>
          <TextButton asChild>
            <Link href="/archive">내 아카이브</Link>
          </TextButton>
        </nav>
      </div>
    );
  }

  if (!userQuery.data) {
    return (
      <div className="fixed z-50 flex h-17 w-full items-center justify-end bg-white px-6">
        <nav className="flex items-center gap-4">
          <TextButton>소개</TextButton>
          <Dialog>
            <DialogTrigger asChild>
              <TextButton>로그인</TextButton>
            </DialogTrigger>
            <Suspense>
              <LoginDialog />
            </Suspense>
          </Dialog>
        </nav>
      </div>
    );
  }
};

export default MainHeader;
