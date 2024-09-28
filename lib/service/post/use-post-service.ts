import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import postQuerys from '@/lib/service/post/post-queries';
import { FetchPostsRequest, Post } from '@/types/post-types';
import { fetchPosts } from '@/lib/service/post/post-service';

export function usePostDetail({ id }: { id: string }) {
  return useSuspenseQuery<Post>(postQuerys.detail(id));
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
