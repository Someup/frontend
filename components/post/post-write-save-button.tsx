'use client';
import Button from '@/components/ui/Button';
import { FunctionComponent } from 'react';

interface PostWriteSaveButtonProps {
  id: string;
}

const PostWriteSaveButton: FunctionComponent<PostWriteSaveButtonProps> = ({
  id,
}) => {
  const handleClick = () => {
    // open post save dialog
    console.log(id);
  };
  return (
    <Button
      type="button"
      variant="filled"
      onClick={handleClick}
      className="ml-auto"
    >
      저장하기
    </Button>
  );
};

export default PostWriteSaveButton;
