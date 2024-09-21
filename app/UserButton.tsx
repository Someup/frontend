import { verifySession } from '@/lib/session';
import { signOut } from '@/lib/session/actions';
import Link from 'next/link';
import React from 'react';

export default async function UserButton(): Promise<React.JSX.Element> {
  const session = await verifySession();

  return (
    <div className="flex items-center">
      {session ? (
        <div className="flex items-center gap-3">
          <button className="h-10 w-10 rounded-full bg-gray-200">
            <img
              src={session.image}
              alt="user"
              className="h-10 w-10 rounded-full"
            />
            <span className="sr-only">User</span>
          </button>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="text-blue-600">로그아웃</button>
          </form>
        </div>
      ) : (
        <Link href="/login">로그인</Link>
      )}
    </div>
  );
}
