'use client';
import LoginDialog from '@/components/auth/login-dialog';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import TextButton from '@/components/ui/TextButton';
import UserButton from '@/components/user/user-button';
import { useUserProfile } from '@/lib/service/user/use-user-service';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const MainHeader: FunctionComponent = () => {
  const userQuery = useUserProfile();

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
            <LoginDialog />
          </Dialog>
        </nav>
      </div>
    );
  }
};

export default MainHeader;
