import ArchiveClient from '@/app/archive/archive-client';
import { Metadata } from 'next';
import { Suspense } from 'react';

interface ArchivePageProps {
  searchParams: {
    id?: string;
    search?: string;
  };
}

export function generateMetadata({ searchParams }: ArchivePageProps): Metadata {
  const search = searchParams.search;
  return {
    title: search ? `검색 결과: ${search}` : 'My Archive',
    description: '아카이브 페이지입니다.',
  };
}

export default function ArchivePage({ searchParams }: ArchivePageProps) {
  const id = Number(searchParams.id) || undefined;
  const search = searchParams.search;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArchiveClient id={id} search={search} />
    </Suspense>
  );
}
