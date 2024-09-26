import { useSuspenseQuery } from '@tanstack/react-query';
import summaryQuerys from '@/lib/service/summary/summaryQueries';
import { Post } from '@/types/PostTypes';

export function useSummaryResult({ id }: { id: string }) {
  return useSuspenseQuery<Post>(summaryQuerys.detail(id));
}
