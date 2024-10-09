/* eslint-disable @next/next/no-img-element */
import URLTextField from '@/components/post/url-text-field';
import React from 'react';
export default function Home() {
  return (
    <div className="w-screen">
      <div className="h-17 bg-white" />
      <div className="p relative bg-primary-400">
        <div className="z-1 absolute bottom-0 h-[8.8%] w-full bg-white"></div>
        <img
          src="/main_logo.png"
          alt="main-logo"
          width={1064}
          height={480}
          className="mx-auto pt-10"
        />
        <URLTextField />
      </div>
    </div>
  );
}
