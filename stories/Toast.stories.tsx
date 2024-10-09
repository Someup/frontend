import Button from '@/components/ui/Button';
import { Toast, ToastAction } from '@/components/ui/Toast';
import { useToast } from '@/components/hooks/use-toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  component: Toast,
  args: {
    children: 'Toast',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWithHooks = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: '이미지 업로드 완료',
            description: '이미지 업로드가 성공적으로 완료되었습니다.',
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

const ToastActionWithHooks = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: '이미지 업로드 완료',
            description: '이미지 업로드가 성공적으로 완료되었습니다.',
            action: <ToastAction altText="보기">보기</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

const DestructiveToastWithHooks = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            variant: 'destructive',
            title: '게시글 삭제 실패',
            description: '게시글 삭제에 실패했습니다. 다시 시도해주세요.',
            action: <ToastAction altText="다시 시도">다시 시도</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastWithHooks />,
};

export const WithAction: Story = {
  render: () => <ToastActionWithHooks />,
};

export const Destructive: Story = {
  render: () => <DestructiveToastWithHooks />,
};
