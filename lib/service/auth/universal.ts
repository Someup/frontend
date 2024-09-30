import { accessTokenConfig } from '@/lib/service/auth/constants';
import { isServerEnvironment } from '@/lib/utils';

export function getAccessTokenUniversal() {
  return isServerEnvironment()
    ? require('next/headers').cookies().get(accessTokenConfig.name).value
    : require('@/lib/service/auth/token').default.accessToken.get();
}
