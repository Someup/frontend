import { fetchPost } from '@/lib/service/post/post-service';
import { FetchPostsRequest } from '@/types/post-types';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const postQuerys = createQueryKeys('post', {
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: (id: string) => fetchPost(id),
  }),
  list: (params: Pick<FetchPostsRequest, 'archiveId' | 'search'>) => ({
    queryKey: [{ params }],
  }),
});

export default postQuerys;
