import userQueries from '@/lib/service/user/user-queries';

import { useQuery } from '@tanstack/react-query';

export function useUserProfile() {
  return useQuery(userQueries.profile());
}
