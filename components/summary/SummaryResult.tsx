'use client';
import { useSummaryResult } from '@/lib/service/summary/useSummaryService';

const SummaryResult = ({ id }: { id: string }) => {
  const { data } = useSummaryResult({ id });

  return <div>{data}</div>;
};

export default SummaryResult;
