import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import serverEnv from '@/lib/env/serverEnv';
import {
  SessionPayload,
  sessionPayloadSchema,
} from '@/lib/session/sessionSchema';
import { cookies } from 'next/headers';

export const SESSION_EXPIRATION: number = 1000 * 60 * 60 * 24; // 1 day
const secretKey: string = serverEnv.SESSION_SECRET_KEY;
const encodeKey: Uint8Array = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodeKey);
}

export async function decrypt(
  session: string | undefined,
): Promise<SessionPayload | undefined> {
  if (!session) return undefined;

  try {
    const { payload } = await jwtVerify(session, encodeKey, {
      algorithms: ['HS256'],
    });

    const { data } = sessionPayloadSchema.safeParse(payload);

    return data;
  } catch (error) {
    return undefined;
  }
}

export async function createSession(payload: SessionPayload): Promise<{
  success: boolean;
}> {
  try {
    const expires = new Date(Date.now() + SESSION_EXPIRATION);

    const session = await encrypt(payload);

    cookies().set('session', session, {
      expires,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
    return {
      success: true,
    };
  } catch (error) {
    console.error('Failed to create session', error);
    return {
      success: false,
    };
  }
}

export async function verifyInputSession(
  value: string,
): Promise<SessionPayload | undefined> {
  return decrypt(value);
}

export async function verifySession(): Promise<SessionPayload | undefined> {
  const cookie = cookies().get('session')?.value;
  return decrypt(cookie);
}

export async function updateSession(
  payload?: Partial<SessionPayload>,
): Promise<{
  success: boolean;
}> {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!cookie || !session) return { success: false };

  const expires = new Date(Date.now() + SESSION_EXPIRATION);

  const newSession = payload
    ? await encrypt({ ...session, ...payload })
    : cookie;

  cookies().set('session', newSession, {
    expires,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });

  return { success: true };
}

export function deleteSession(): void {
  cookies().delete('session');
}
