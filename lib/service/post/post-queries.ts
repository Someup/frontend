import { FetchPostsRequest } from '@/types/post-types';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const postQuerys = createQueryKeys('posts', {
  detail: (id: string) => [id] as const,
  list: (params: Pick<FetchPostsRequest, 'archiveId' | 'search'>) => ({
    queryKey: [{ params }],
  }),
});

export default postQuerys;
