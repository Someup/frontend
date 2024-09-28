import PostList from '@/components/post/post-list';
import PostSearchBar from '@/components/post/post-search-bar';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

interface ArchivePageProps {
  searchParams: {
    id?: string;
    search?: string;
  };
}

export const metadata: Metadata = {
  title: '아카이브',
  description: '아카이브 페이지입니다.',
};

export default function ArchivePage({ searchParams }: ArchivePageProps) {
  const id = searchParams.id || '';
  const search = searchParams.search || '';
  return (
    <div>
      <div className="p-10">
        <Link href="/archive">
          <h1 className="text-center text-[48px] font-semibold leading-1.3 tracking-wider">
            My Archive
          </h1>
        </Link>
      </div>
      <div className="mx-auto max-w-screen-md">
        {/* archive list */}
        <div></div>
        {/* post list */}
        <main>
          <div className="p-2.5">
            <PostSearchBar defaultValue={search} />
          </div>
          <ul>
            <Suspense fallback={<div>Loading...</div>}>
              <PostList search={search} archiveId={id} />
            </Suspense>
          </ul>
        </main>
      </div>
    </div>
  );
}
