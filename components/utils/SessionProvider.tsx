'use client';

import useSessionStore, { SessionStore } from '@/lib/session/store';
import React from 'react';

export interface SessionProviderProps {
  session: SessionStore['token'];
  children: React.ReactNode;
}

export default function SessionProvider({
  session,
  children,
}: SessionProviderProps): React.JSX.Element {
  useSessionStore.setState({ token: session });

  return <>{children}</>;
}
