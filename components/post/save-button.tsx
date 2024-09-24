'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

interface SaveButtonProps {
  postId: string;
  isLoggedIn: boolean;
}

const SaveButton: FunctionComponent<SaveButtonProps> = ({
  postId,
  isLoggedIn,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      router.push(`/write/${postId}`);
    } else {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  };
  return (
    <Button
      type="button"
      variant="rounded"
      className="fixed ml-auto h-23 w-24"
      style={{ right: '30px', bottom: '130px' }}
      onClick={handleClick}
    >
      저장
    </Button>
  );
};

export default SaveButton;
