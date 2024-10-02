'use client';
import ArchiveListItem from '@/components/archive/archive-list-item';
import { useArchives } from '@/lib/service/archive/use-archive-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import Link from 'next/link';

interface ArchiveListProps {
  selectedArchiveId?: string;
}

export default function ArchiveList({ selectedArchiveId }: ArchiveListProps) {
  const archivesQuery = useArchives();
  return (
    <div className="flex flex-col">
      <Link
        href={`/archive`}
        className={cn(
          typography({ scale: 'body-5' }),
          'rounded-2 px-5 py-3 text-gray-400 hover:bg-gray-50',
        )}
      >
        전체
      </Link>
      {archivesQuery.data.archives.map((archive) => {
        return (
          <ArchiveListItem
            key={archive.id}
            archiveId={archive.id}
            archiveName={archive.name}
            isSelected={archive.id.toString() === selectedArchiveId}
          />
        );
      })}
    </div>
  );
}
