import { useSuspenseQuery } from '@tanstack/react-query';
import postQuerys from '@/lib/service/post/post-queries';
import { Post } from '@/types/post-types';

export function usePostDetail({ id }: { id: string }) {
  return useSuspenseQuery<Post>(postQuerys.detail(id));
}
