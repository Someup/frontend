import { fetchPost } from '@/lib/service/post/post-service';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const postQuerys = createQueryKeys('post', {
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: (id: string) => fetchPost(id),
  }),
});

export default postQuerys;
