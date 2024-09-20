'use client';
import { useSummaryResult } from '@/lib/service/summary/useSummaryService';

const SummaryResult = ({ id }: { id: string }) => {
  const {
    data: { content },
  } = useSummaryResult({ id });

  return <div>{content}</div>;
};

export default SummaryResult;
