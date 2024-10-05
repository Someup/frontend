'use client';
import ArchiveList from '@/components/archive/archive-list';
import PostList from '@/components/post/post-list';
import PostSearchBar from '@/components/post/post-search-bar';
import { useArchives } from '@/lib/service/archive/use-archive-service';
import Link from 'next/link';
import React, { Suspense } from 'react';

interface ArchiveClientProps {
  id: number;
  search: string;
}

export default function ArchiveClient({ id, search }: ArchiveClientProps) {
  const archivesQuery = useArchives();

  const selectedArchive = archivesQuery.data.archives.find(
    (archive) => archive.id === id,
  );
  const title = selectedArchive ? selectedArchive.name : '전체';

  return (
    <div className="mt-17">
      <div className="p-10">
        <Link href="/archive">
          <h1 className="text-center text-[48px] font-semibold leading-1.3 tracking-wider">
            {title}
          </h1>
        </Link>
      </div>
      <div className="mx-auto flex max-w-screen-xl">
        {/* archive list */}
        <div className="w-full max-w-[224px]">
          <Suspense fallback={<div>Loading...</div>}>
            <ArchiveList
              archives={archivesQuery.data.archives}
              selectedArchiveId={id}
            />
          </Suspense>
        </div>
        {/* post list */}
        <main className="flex-1">
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
