import { logout, withdrawAccount } from '@/lib/service/auth/auth-service';
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

export function useWithdrawAccount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: withdrawAccount,
    onSuccess: async () => {
      token.accessToken.remove();
      await queryClient.resetQueries();
    },
  });
}
