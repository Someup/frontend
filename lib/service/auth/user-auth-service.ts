import { logout } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      token.accessToken.remove();
      router.push('/');
    },
  });
}
