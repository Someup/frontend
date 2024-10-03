import Button from '@/components/ui/Button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import React, { useState } from 'react';

interface EditArchiveDialogProps {
  onSubmit: (archiveName: string) => void;
  defaultArchiveName: string;
}

export default function EditArchiveDialog({
  onSubmit,
  defaultArchiveName,
}: EditArchiveDialogProps) {
  const [archiveName, setArchiveName] = useState(defaultArchiveName);

  const handleSubmit = () => {
    onSubmit(archiveName);
  };

  return (
    <DialogContent>
      <DialogHeader className="justify-center">
        <DialogTitle>아카이브 이름 변경하기</DialogTitle>
        <DialogDescription className="sr-only">
          아카이브 제목을 입력하고 아카이브 이름을 변경하세요
        </DialogDescription>
      </DialogHeader>
      <div className="px-6">
        <Input
          placeholder="아카이브 제목을 입력해주세요."
          value={archiveName}
          onChange={(e) => setArchiveName(e.target.value)}
        />
      </div>
      <DialogFooter className="justify-center">
        <Button onClick={handleSubmit}>확인하기</Button>
      </DialogFooter>
    </DialogContent>
  );
}
