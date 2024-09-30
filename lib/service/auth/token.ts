import { accessTokenConfig } from '@/lib/service/auth/constants';
import { getCookie, removeCookie, setCookie } from '@/lib/utils/cookie';

const token = {
  accessToken: {
    set: setAccessToken,
    remove: removeAccessToken,
    get: getAccessToken,
  },
};
function setAccessToken(accessToken: string | undefined): void {
  if (!accessToken) {
    removeCookie(accessTokenConfig.name);
    return;
  }
  setCookie(accessTokenConfig.name, accessToken, {
    maxAge: accessTokenConfig.expiration,
    path: '/',
  });
}

function removeAccessToken(): void {
  removeCookie(accessTokenConfig.name);
}

function getAccessToken(): string | undefined {
  return getCookie(accessTokenConfig.name);
}

export default token;
