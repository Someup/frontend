import Button from '@/components/ui/Button';
import { FunctionComponent } from 'react';

const SummarySaveButton: FunctionComponent = () => {
  return (
    <Button
      type="button"
      variant="rounded"
      className="absolute ml-auto h-23 w-24"
      style={{ right: '-6rem', bottom: '20rem' }}
    >
      저장
    </Button>
  );
};

export default SummarySaveButton;
