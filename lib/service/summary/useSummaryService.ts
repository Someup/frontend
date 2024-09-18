import summaryQuerys from '@/lib/service/summary/summaryQueries';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useSummaryResult({ id }: { id: string }) {
  return useSuspenseQuery<string>(summaryQuerys.detail(id));
}
