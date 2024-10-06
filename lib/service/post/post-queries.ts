import { FetchPostsRequest, GetPostRequest } from '@/types/post-types';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const postQuerys = createQueryKeys('posts', {
  detail: (params: GetPostRequest) => ({
    queryKey: [{ params }],
  }),
  list: (params: Pick<FetchPostsRequest, 'archiveId' | 'search'>) => ({
    queryKey: [{ params }],
  }),
  postCount: () => ({
    queryKey: ['postCount'],
  }),
});

export default postQuerys;
