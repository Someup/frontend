import MainHeader from '@/components/header/main-header';
import URLTextField from '@/components/post/url-text-field';
import React from 'react';
export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="h-screen w-screen">
        <div className="h-[8%] bg-white" />
        <div className="h-[65%] bg-primary-400">
          <URLTextField />
        </div>
      </div>
    </>
  );
}
