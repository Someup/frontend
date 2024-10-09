import Button from '@/components/ui/Button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { useWithdrawAccount } from '@/lib/service/auth/user-auth-service';
import React from 'react';

export default function WithdrawDialog() {
  const { mutate: withdrawAccount } = useWithdrawAccount();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>정말로 탈퇴하시겠습니까?</DialogTitle>
        <DialogDescription>
          이 작업은 실행 취소할 수 없습니다. <br />
          계정과 모든 활동 기록이 영구적으로 삭제됩니다.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button size="lg">취소하기</Button>
        </DialogClose>
        <Button size="lg" onClick={() => withdrawAccount()}>
          탈퇴하기
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
