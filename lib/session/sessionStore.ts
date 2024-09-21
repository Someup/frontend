import { SessionPayload } from '@/lib/session/sessionSchema';
import { create } from 'zustand';

interface SessionStore {
  session?: SessionPayload;
  setSession: (session: SessionPayload | undefined) => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  session: undefined,
  setSession: (session) => set({ session }),
}));

export const useSession = () => useSessionStore((state) => state.session);
