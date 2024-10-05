import Button from '@/components/ui/Button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { ARCHIVE_MAX_NUM } from '@/lib/service/archive/constraints';
import React from 'react';

export default function MaxArchiveNumAlert() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          생성할 수 있는 최대 아카이브 갯수를 초과하였습니다!
        </DialogTitle>
        <DialogDescription>
          최대 아카이브 갯수 : {ARCHIVE_MAX_NUM}개
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button size="lg">돌아가기</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
