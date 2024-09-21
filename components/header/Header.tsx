'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <div className="flex h-32 items-center px-6">
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        alt="logo"
        width={180}
        height={128}
        onClick={handleClick}
      />
    </div>
  );
};

export default Header;
