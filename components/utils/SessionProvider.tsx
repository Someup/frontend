'use client';
import { SessionPayload } from '@/lib/session/sessionSchema';
import { useSessionStore } from '@/lib/session/sessionStore';
import React from 'react';

interface SessionProviderProps {
  session?: SessionPayload;
  children: React.ReactNode;
}

export default function SessionProvider({
  session,
  children,
}: SessionProviderProps): React.JSX.Element {
  useSessionStore.setState({ session });

  return <>{children}</>;
}
