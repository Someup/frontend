import Button from '@/components/ui/Button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import React from 'react';

interface RemoveArchiveDialogProps {
  onSubmit: () => void;
}

export default function RemoveArchiveDialog({
  onSubmit,
}: RemoveArchiveDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <div>
          <DialogTitle className="text-center">아카이브 삭제하기</DialogTitle>
          <DialogDescription className="text-center">
            삭제한 아카이브는 되돌릴 수 없으며, 해당 아카이브에 저장된
            요약본들은 모두 삭제됩니다
          </DialogDescription>
        </div>
      </DialogHeader>
      <DialogFooter className="justify-center">
        <Button onClick={onSubmit}>삭제하기</Button>
      </DialogFooter>
    </DialogContent>
  );
}