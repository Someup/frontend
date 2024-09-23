import 'server-only';
import { cookies } from 'next/headers';
import { SESSION_COOKIE_NAME } from '@/lib/session/constants';

const TOKEN_EXPIRES_IN: number = 60 * 60 * 24 * 7;

export function getServerToken(): string | undefined {
  return cookies().get(SESSION_COOKIE_NAME)?.value;
}

export function setServerToken(token: string): void {
  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
    maxAge: TOKEN_EXPIRES_IN,
  });
}

export function removeServerToken(): void {
  cookies().delete(SESSION_COOKIE_NAME);
}
