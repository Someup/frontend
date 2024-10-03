import { fetchArchives } from '@/lib/service/archive/archive-service';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const archiveQueries = createQueryKeys('archive', {
  list: () => ({
    queryKey: ['archives'],
    queryFn: fetchArchives,
  }),
});

export default archiveQueries;
