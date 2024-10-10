import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import TextButton from '@/components/ui/TextButton';
import { useDeletePost } from '@/lib/service/post/use-post-service';
import Link from 'next/link';
import React, { useState } from 'react';

interface PostDeleteButtonProps {
  archiveId?: number;
  postId: string;
}

const PostDeleteButton = ({ archiveId, postId }: PostDeleteButtonProps) => {
  const { mutate: deletePostMutate } = useDeletePost();

  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    deletePostMutate(postId, {
      onSuccess: () => {
        setDeleteDialogOpen(false);
        setSuccessDialogOpen(true);
      },
    });
  };

  const handleAcceptButtonClick = () => {
    setSuccessDialogOpen(false);
  };

  return (
    <>
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogTrigger asChild>
          <TextButton className="ml-2">삭제</TextButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>요약본을 삭제하시겠습니까?</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center">
            삭제한 요약본은 되돌릴 수 없습니다.
          </DialogDescription>
          <DialogFooter>
            <Button size="lg" onClick={handleDeleteButtonClick}>
              삭제하기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 삭제 성공 Dialog */}
      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
          <DialogDescription className="text-center">
            요약본이 삭제되었습니다.
          </DialogDescription>
          <DialogFooter>
            <Link
              href={
                archiveId !== undefined
                  ? '/archive'
                  : `/archive?id=${archiveId}`
              }
            >
              <Button size="lg" onClick={handleAcceptButtonClick}>
                확인
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostDeleteButton;
