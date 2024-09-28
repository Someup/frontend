import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import postQuerys from '@/lib/service/post/post-queries';
import { Post, UpdatePostBody } from '@/types/post-types';
import { updatePost } from '@/lib/service/post/post-service';

export function usePostDetail({ id }: { id: string }) {
  return useSuspenseQuery<Post>(postQuerys.detail(id));
}

export function useUpdatePostMutation() {
  return useMutation<void, Error, { id: string; body: UpdatePostBody }>({
    mutationFn: ({ id, body }) => updatePost(id, body),
  });
}
