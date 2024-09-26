import {
  accessTokenConfig,
  refreshTokenConfig,
} from '@/lib/service/auth/constants';
import { getCookie, removeCookie, setCookie } from '@/lib/utils/cookie';

const token = {
  accessToken: {
    set: setAccessToken,
    remove: removeAccessToken,
    get: getAccessToken,
  },
  refreshToken: {
    set: setRefreshToken,
    remove: removeRefreshToken,
    get: getRefreshToken,
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

function setRefreshToken(refreshToken: string | undefined): void {
  if (!refreshToken) {
    removeCookie(refreshTokenConfig.name);
    return;
  }
  setCookie(refreshTokenConfig.name, refreshToken, {
    maxAge: refreshTokenConfig.expiration,
    path: '/',
  });
}

function removeRefreshToken(): void {
  removeCookie(refreshTokenConfig.name);
}

function getRefreshToken(): string | undefined {
  return getCookie(refreshTokenConfig.name);
}

export default token;
