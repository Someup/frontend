import { isServerEnvironment } from '@/lib/utils';

export function getAccessTokenUniversal() {
  return isServerEnvironment()
    ? require('next/headers').cookies().get('access_token')
    : require('@/lib/service/auth/token').default.accessToken.get();
}
