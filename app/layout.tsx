import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Providers from '@/components/utils/Providers';
import MainHeader from '@/components/header/main-header';

export const metadata: Metadata = {
  title: {
    template: '%s | Someup',
    default: 'Someup',
  },
  description: 'Someup을 통해 당신만의 요약본을 몇초만에 만들어보세요!',
  openGraph: {
    title: 'Someup',
    description: 'Someup을 통해 당신만의 요약본을 몇초만에 만들어보세요!',
    url: 'https://someup.site',
    siteName: 'Someup',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://someup.site/og_800_600.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://someup.site/og_1200.png',
        width: 1200,
        height: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
