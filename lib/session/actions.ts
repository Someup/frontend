import 'server-only';
import { cookies } from 'next/headers';

export async function signOut(): Promise<void> {
  cookies().delete('session');
}
