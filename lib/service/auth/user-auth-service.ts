import { logout } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSettled: async () => {
      token.accessToken.remove();
      await queryClient.resetQueries();
    },
  });
}
