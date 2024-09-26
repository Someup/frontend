'use client';
import Button from '@/components/ui/Button';
import { FunctionComponent } from 'react';

interface PostSaveButtonProps {
  id: string;
}

const PostSaveButton: FunctionComponent<PostSaveButtonProps> = ({ id }) => {
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

export default PostSaveButton;
