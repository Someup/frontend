import Button from '@/components/ui/Button';
import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/Dialog';
import React, { FunctionComponent, useState } from 'react';
import {
  useArchives,
  useCreateArchive,
} from '@/lib/service/archive/use-archive-service';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command';
import Chevron from '@/assets/chevron.svg';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';

interface SavePostDialogProps {
  initialArchiveId?: number | null;
  onSubmit: (archiveId: number | null) => void;
}

const SavePostDialog: FunctionComponent<SavePostDialogProps> = ({
  initialArchiveId = null,
  onSubmit,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const {
    data: { archives },
  } = useArchives();
  const { mutate } = useCreateArchive();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArchiveId, setSelectedArchiveId] = useState<number | null>(
    initialArchiveId,
  );
  const selectedArchiveName = archives.find(
    (archive) => archive.id === selectedArchiveId,
  )?.name;

  const handleSelectArchive = (id: string) => {
    setIsPopoverOpen(false);
    setSelectedArchiveId(+id);
  };

  const createArchiveWithName = () => {
    mutate({ name: searchTerm });
    setSearchTerm('');
    setIsPopoverOpen(false);
  };

  const handleSubmit = () => {
    onSubmit(selectedArchiveId);
  };

  return (
    <DialogContent>
      <DialogHeader className="justify-center text-xl">
        <DialogTitle>요약본 저장위치를 설정해주세요.</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Popover open={isPopoverOpen} modal>
          <PopoverTrigger
            className={cn(
              typography({ scale: 'body-4' }),
              'ring-offset-background ring-tertiary mx-auto flex h-[60px] w-[280px] items-center justify-between overflow-hidden rounded-2 bg-white px-4 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-600 [&>span]:line-clamp-1',
              selectedArchiveName ? 'text-black' : 'text-gray-600',
            )}
            onClick={() => setIsPopoverOpen((prev) => !prev)}
          >
            {selectedArchiveName
              ? selectedArchiveName
              : '아카이브를 선택하세요'}
            <Chevron
              className={`transition-transform duration-200 ${isPopoverOpen ? 'rotate-180' : ''}`}
            />
          </PopoverTrigger>
          <PopoverContent className="z-[51] w-[280px] rounded-2 border-none bg-white p-0 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
            <Command
              className="overflow-hidden rounded-2"
              value={selectedArchiveName}
              onValueChange={handleSelectArchive}
              filter={(value, search) => {
                if (value.includes(search)) return 1;
                return 0;
              }}
            >
              <CommandInput
                className={cn(
                  typography({ scale: 'body-4' }),
                  'h-11 flex-1 border-none focus:ring-0',
                )}
                placeholder="아카이브 제목을 입력하세요"
                value={searchTerm}
                onValueChange={setSearchTerm}
              />
              <CommandList className="max-h-[300px] overflow-y-auto">
                <CommandEmpty>
                  <button
                    onClick={createArchiveWithName}
                    className="h-11 w-full pl-2 text-left text-gray-600 hover:bg-gray-50 focus:bg-gray-50 focus-visible:outline-none"
                  >
                    {`${searchTerm}`} 만들기
                  </button>
                </CommandEmpty>
                <CommandGroup>
                  {archives.map(({ id, name }) => (
                    <CommandItem
                      key={id}
                      value={`${id}`}
                      className="h-11 cursor-pointer pl-2 hover:bg-gray-50 focus:bg-gray-50"
                      onSelect={handleSelectArchive}
                    >
                      {name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </DialogDescription>
      <DialogFooter className="justify-center">
        <DialogClose asChild>
          <Button onClick={handleSubmit}>저장완료</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default SavePostDialog;
