import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { FunctionComponent } from 'react';

const FeedbackBox: FunctionComponent = () => {
  return (
    <div
      className={cn(
        typography({ scale: 'title-3' }),
        'mx-auto my-5 flex h-24 items-center justify-between rounded-2 bg-gray-50 px-5',
      )}
    >
      요약이 마음에 안드시나요?
      <Button type="button" variant="outlined">
        재요약하기
      </Button>
    </div>
  );
};

export default FeedbackBox;
