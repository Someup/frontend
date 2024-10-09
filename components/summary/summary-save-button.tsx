'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

interface SummarySaveButtonProps {
  postId: string;
  isLoggedIn: boolean;
}

const SummarySaveButton: FunctionComponent<SummarySaveButtonProps> = ({
  postId,
  isLoggedIn,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      router.push(`/write/${postId}?status=draft`);
    } else {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  };
  return (
    <Button
      type="button"
      variant="filled"
      size="lg"
      className="ml-auto mt-auto"
      onClick={handleClick}
    >
      저장하기
    </Button>
  );
};

export default SummarySaveButton;
