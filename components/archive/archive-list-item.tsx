import CreateArchiveDialog from '@/components/archive/create-archive-dialog';
import EditArchiveDialog from '@/components/archive/edit-archive-dialog';
import RemoveArchiveDialog from '@/components/archive/remove-archive-dialog';
import ThreeDotsFilled from '@/components/icons/ThreeDotsFilled';
import Button from '@/components/ui/Button';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  useCreateArchive,
  useDeleteArchive,
  useUpdateArchive,
} from '@/lib/service/archive/use-archive-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import Link from 'next/link';
import { useState } from 'react';

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
  const [showDialog, setDialog] = useState<'edit' | 'remove' | 'create' | null>(
    null,
  );
  const createArchive = useCreateArchive();
  const updateArchive = useUpdateArchive();
  const deleteArchive = useDeleteArchive();

  const handleDialogMenu = () => {
    switch (showDialog) {
      case 'edit':
        return (
          <EditArchiveDialog
            onSubmit={(archiveName) => {
              updateArchive.mutate(
                { archiveId, name: archiveName },
                {
                  onSettled: () => {
                    setDialog(null);
                  },
                },
              );
            }}
            defaultArchiveName={archiveName}
          />
        );
      case 'remove':
        return (
          <RemoveArchiveDialog
            onSubmit={() => {
              deleteArchive.mutate(
                { archiveId },
                { onSettled: () => setDialog(null) },
              );
            }}
          />
        );
      case 'create':
        return (
          <CreateArchiveDialog
            onSubmit={(archiveName) => {
              createArchive.mutate(
                { name: archiveName },
                {
                  onSettled: () => {
                    setDialog(null);
                  },
                },
              );
            }}
          />
        );
      default:
        return null;
    }
  };

  console.log('showDialog: ', handleDialogMenu());

  return (
    <div
      className={cn(
        typography({ scale: 'body-5' }),
        'group flex items-center justify-between rounded-2 px-5 py-3',
        isSelected ? 'text-primary' : 'text-black',
      )}
    >
      <Link
        href={`/archive?id=${archiveId}`}
        className="flex h-8 w-full items-center"
      >
        {archiveName}
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
            <Button
              variant="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100"
            >
              <ThreeDotsFilled />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DialogTrigger asChild>
              <DropdownMenuItem onSelect={() => setDialog('edit')}>
                아카이브 제목 수정
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={() => {
                  setDialog('remove');
                }}
              >
                아카이브 삭제
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={() => {
                  setDialog('create');
                }}
              >
                아카이브 추가
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        {handleDialogMenu()}
      </Dialog>
    </div>
  );
}
