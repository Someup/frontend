'use server';

import { removeServerToken, setServerToken } from '@/lib/session/token';

export async function signOut(): Promise<void> {
  removeServerToken();
}

export async function updateToken(token: string): Promise<void> {
  setServerToken(token);
}
