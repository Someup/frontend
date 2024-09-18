import { getSummary } from '@/lib/service/summary/summaryService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const summaryQuerys = createQueryKeys('summary', {
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: (id: string) => getSummary(id),
  }),
});

export default summaryQuerys;
