import Button from '@/components/ui/Button';
import { FunctionComponent } from 'react';

const PostSaveButton: FunctionComponent = () => {
  return (
    <Button
      type="button"
      variant="rounded"
      className="fixed ml-auto h-23 w-24"
      style={{ right: '30px', bottom: '130px' }}
    >
      저장
    </Button>
  );
};

export default PostSaveButton;
