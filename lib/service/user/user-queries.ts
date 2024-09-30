import { fetchProfile } from '@/lib/service/user/user-service';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const userQueries = createQueryKeys('user', {
  profile: () => ({
    queryKey: ['me'],
    queryFn: () => fetchProfile(),
  }),
});

export default userQueries;
