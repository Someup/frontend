import LoginDialog from '@/components/auth/login-dialog';
import Button from '@/components/ui/Button';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <div className="fixed z-50 flex h-17 w-full items-center justify-between bg-white px-6">
      <nav className="flex items-center gap-4">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/header_logo.png"
            alt="logo"
            width={150}
            height={60}
          />
        </Link>
        <Button variant="text" asChild>
          <Link href="/about">소개</Link>
        </Button>
      </nav>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="text">로그인</Button>
          </DialogTrigger>
          <LoginDialog />
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
