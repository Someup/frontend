import {
  useMutation,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import postQuerys from '@/lib/service/post/post-queries';
import { FetchPostsRequest, Post, UpdatePostBody } from '@/types/post-types';
import {
  fetchPost,
  updatePost,
  fetchPosts,
} from '@/lib/service/post/post-service';

export function usePostDetail(id: string) {
  return useSuspenseQuery<Post, Error>({
    queryKey: postQuerys.detail(id).queryKey,
    queryFn: () => fetchPost(id),
  });
}

export function useUpdatePostMutation() {
  return useMutation<void, Error, { id: string; body: UpdatePostBody }>({
    mutationFn: ({ id, body }) => updatePost(id, body),
  });
}

export function usePosts(
  params: Pick<FetchPostsRequest, 'archiveId' | 'search'>,
) {
  return useSuspenseInfiniteQuery({
    queryKey: postQuerys.list(params).queryKey,
    queryFn: ({ pageParam = '1' }) =>
      fetchPosts({
        ...params,
        page: pageParam,
      }),
    initialPageParam: '1',
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.postList?.length === 0
        ? undefined
        : String(allPages.length + 1);
    },
  });
}
