import { createQueryKeys } from '@lukemorales/query-key-factory';

const postQuerys = createQueryKeys('post', {
  detail: (id: string) => [id],
});

export default postQuerys;
