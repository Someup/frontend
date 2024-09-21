import UserButton from '@/app/UserButton';
import Link from 'next/link';
import React from 'react';

export default function Header(): React.JSX.Element {
  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between bg-white px-4 shadow-sm">
      <div>
        <Link href="/">
          <span className="font-bold text-lg">Logo</span>
        </Link>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
