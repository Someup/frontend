import Button from '@/components/ui/Button';
import UserButton from '@/components/user/user-button';
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

      <UserButton />
    </div>
  );
};

export default Header;
