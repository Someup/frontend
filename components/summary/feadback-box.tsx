'use client';

import LoginDialog from '@/components/auth/login-dialog';
import OptionDialog from '@/components/summary/option-dialog';
import Button from '@/components/ui/Button';
import { DialogTrigger } from '@/components/ui/Dialog';
import { useCreatePostMutation } from '@/lib/service/post/use-post-service';
import { useUserProfile } from '@/lib/service/user/use-user-service';
import { cn } from '@/lib/utils';
import { useSummaryStore } from '@/store/useSummaryStore';
import { typography } from '@/styles/typography';
import { SummaryOptions } from '@/types/summary-types';
import { Dialog } from '@radix-ui/react-dialog';
import { FunctionComponent, Suspense } from 'react';

const FeedbackBox: FunctionComponent = () => {
  const { url, options, setOptions } = useSummaryStore();
  const { mutate } = useCreatePostMutation();
  const isLogin = useUserProfile().data !== undefined;

  const handleConfirm = (newOptions: SummaryOptions) => {
    setOptions(options);
    mutate({
      url,
      options: newOptions,
    });
  };

  return (
    <div
      className={cn(
        typography({ scale: 'title-3' }),
        'mx-auto my-5 flex min-h-24 w-full max-w-[1156px] items-center justify-between rounded-2 bg-gray-50 px-5',
      )}
    >
      요약이 마음에 안드시나요?
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" variant="outlined" size="lg">
            재요약하기
          </Button>
        </DialogTrigger>
        {isLogin ? (
          <OptionDialog onConfirm={handleConfirm} initialOptions={options} />
        ) : (
          <Suspense>
            <LoginDialog />
          </Suspense>
        )}
      </Dialog>
    </div>
  );
};

export default FeedbackBox;
