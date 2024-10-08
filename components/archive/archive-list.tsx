'use client';
import ArchiveListItem from '@/components/archive/archive-list-item';
import CreateArchiveDialog from '@/components/archive/create-archive-dialog';
import MaxArchiveNumAlert from '@/components/archive/max-archive-num-alert';
import PlusOutlined from '@/components/icons/PlusOutlined';
import { DialogTrigger } from '@/components/ui/Dialog';
import { ARCHIVE_MAX_NUM } from '@/lib/service/archive/constraints';
import { useCreateArchive } from '@/lib/service/archive/use-archive-service';
import { useAllPostCount } from '@/lib/service/post/use-post-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { Archive } from '@/types/archive-types';
import { Dialog } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { useState } from 'react';

interface ArchiveListProps {
  selectedArchiveId?: number;
  archives: Archive[];
}

export default function ArchiveList({
  selectedArchiveId,
  archives,
}: ArchiveListProps) {
  const postCountQuery = useAllPostCount();
  const createArchive = useCreateArchive();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [MaxArchiveAlertOpen, setMaxArchiveAlertOpen] = useState(false);

  const createArchiveDisabled = archives.length > ARCHIVE_MAX_NUM;

  const handleCreateArchive = (archiveName: string) => {
    if (archives.length > ARCHIVE_MAX_NUM) {
      setIsDialogOpen(false);
      setMaxArchiveAlertOpen(true);
      return;
    }
    createArchive.mutate(
      { name: archiveName },
      {
        onSuccess: () => {
          setIsDialogOpen(false);
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <Link
        href={`/archive`}
        className={cn(
          typography({ scale: 'body-5' }),
          'flex items-center justify-between px-5 py-3',
          !selectedArchiveId ? 'text-primary-400' : 'text-black',
        )}
      >
        전체
        <span>({postCountQuery.data.totalCount})</span>
      </Link>
      {archives.map((archive) => {
        return (
          <ArchiveListItem
            key={archive.id}
            archiveId={archive.id}
            archiveName={archive.name}
            isSelected={archive.id === selectedArchiveId}
          />
        );
      })}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button
            className={cn(
              typography({ scale: 'body-5' }),
              'flex items-center justify-between px-5 py-3 text-gray-400',
            )}
            disabled={createArchiveDisabled}
          >
            아카이브 추가
            <PlusOutlined className="h-4 w-4" />
          </button>
        </DialogTrigger>
        <CreateArchiveDialog onSubmit={handleCreateArchive} />
      </Dialog>
      <Dialog open={MaxArchiveAlertOpen} onOpenChange={setMaxArchiveAlertOpen}>
        <MaxArchiveNumAlert />
      </Dialog>
    </div>
  );
}
