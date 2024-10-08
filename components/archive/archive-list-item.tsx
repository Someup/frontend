import RemoveArchiveDialog from '@/components/archive/remove-archive-dialog';
import ThreeDotsFilled from '@/components/icons/ThreeDotsFilled';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  archiveSchema,
  ARCHIVE_NAME_MAX_LENGTH,
} from '@/lib/service/archive/constraints';

import {
  useDeleteArchive,
  useUpdateArchive,
} from '@/lib/service/archive/use-archive-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface ArchiveListItemProps {
  archiveId: number;
  archiveName: string;
  isSelected: boolean;
}
export default function ArchiveListItem({
  archiveId,
  archiveName,
  isSelected,
}: ArchiveListItemProps) {
  const [showDropdown, setDropdown] = useState(false);
  const [showDialog, setDialog] = useState<'remove' | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newArchiveName, setNewArchiveName] = useState(archiveName);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateArchiveMutation = useUpdateArchive();
  const deleteArchiveMutation = useDeleteArchive();

  const handleDialogMenu = () => {
    switch (showDialog) {
      case 'remove':
        return (
          <RemoveArchiveDialog
            onSubmit={() => {
              deleteArchiveMutation.mutate(
                { archiveId },
                { onSettled: () => setDialog(null) },
              );
            }}
          />
        );
      default:
        return null;
    }
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const updateArchive = () => {
    if (newArchiveName === archiveName || newArchiveName === '') {
      setIsEditing(false);
      return;
    }
    const { data, error } = archiveSchema.safeParse({ name: newArchiveName });
    if (error) {
      error.errors.forEach((err) => {
        alert(err.message);
      });
      return;
    }

    updateArchiveMutation.mutate(
      { archiveId, name: data.name },
      {
        onSettled: () => {
          setIsEditing(false);
        },
      },
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
    }

    if (e.key === 'Enter') {
      updateArchive();
    }
  };

  useEffect(() => {
    if (!isEditing || !inputRef.current) return;
    inputRef.current.focus();
  }, [isEditing]);

  if (isEditing) {
    return (
      <div className="px-5 py-3">
        <input
          type="text"
          value={newArchiveName}
          onChange={(e) => setNewArchiveName(e.target.value)}
          maxLength={ARCHIVE_NAME_MAX_LENGTH}
          placeholder={archiveName}
          className={cn(typography({ scale: 'body-5' }), 'w-full text-black')}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onBlur={updateArchive}
        />
      </div>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={`/archive?id=${archiveId}`}
        className={cn(
          typography({ scale: 'body-5' }),
          'flex items-center justify-between rounded-2 py-3 pl-5 pr-5 group-hover:pr-9',
          isSelected ? 'text-primary-400' : 'text-black',
        )}
      >
        <p className="line-clamp-1 block text-ellipsis">{archiveName}</p>
      </Link>
      <Dialog
        open={true}
        onOpenChange={(open) => {
          if (!open) {
            setDropdown(false);
            setDialog(null);
          }
        }}
      >
        <DropdownMenu open={showDropdown} onOpenChange={setDropdown}>
          <DropdownMenuTrigger asChild>
            <button className="absolute right-5 top-3.5 h-4 w-4 text-black opacity-0 group-hover:opacity-100">
              <ThreeDotsFilled className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[280px]">
            <DropdownMenuItem onSelect={startEditing}>
              아카이브 제목 수정
            </DropdownMenuItem>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={() => {
                  setDialog('remove');
                }}
              >
                아카이브 삭제
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        {handleDialogMenu()}
      </Dialog>
    </div>
  );
}
