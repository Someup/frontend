import Button from '@/components/ui/Button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import React from 'react';

interface CreateArchiveDialogProps {
  onSubmit: (archiveName: string) => void;
}

export default function CreateArchiveDialog({
  onSubmit,
}: CreateArchiveDialogProps) {
  const [archiveName, setArchiveName] = React.useState('');

  const handleSubmit = () => {
    onSubmit(archiveName);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <DialogContent>
      <DialogHeader className="justify-center">
        <DialogTitle>새로운 아카이브 추가</DialogTitle>
        <DialogDescription className="sr-only">
          아카이브 제목을 입력하고 새로운 아카이브를 추가하세요!
        </DialogDescription>
      </DialogHeader>
      <div className="px-6">
        <Input
          placeholder="아카이브 제목을 입력해주세요."
          value={archiveName}
          onChange={(e) => setArchiveName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <DialogFooter className="justify-center">
        <Button size="lg" onClick={handleSubmit}>
          확인하기
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
