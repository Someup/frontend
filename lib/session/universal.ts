/**
 * @file lib/session/universal.ts
 * @description 세션 관련 유틸리티 함수 (서버/클라이언트 환경 공통)
 */

import { SESSION_COOKIE_NAME } from '@/lib/session/constants';
import { isServerEnvironment } from '@/lib/utils';

/**
 * 토큰을 가져옵니다. (서버/클라이언트 환경 공통)
 * @returns string | undefined
 */
export function getToken(): string | undefined {
  return isServerEnvironment()
    ? require('next/headers').cookies().get(SESSION_COOKIE_NAME)?.value
    : require('@/lib/session/store').getSession();
}
