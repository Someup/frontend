import { fetchSummary } from '@/lib/service/summary/summaryService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const summaryQuerys = createQueryKeys('summary', {
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: (id: string) => fetchSummary(id),
  }),
});

export default summaryQuerys;
