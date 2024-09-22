import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <div className="flex h-32 items-center px-6">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/header_logo.png"
          alt="logo"
          width={180}
          height={128}
        />
      </Link>
    </div>
  );
};

export default Header;
