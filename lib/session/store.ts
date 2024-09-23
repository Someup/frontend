import { create } from 'zustand';

export interface SessionStore {
  token: string | undefined;
  setToken: (token: string) => void;
}

const useSessionStore = create<SessionStore>((set) => ({
  token: undefined,
  setToken: (token) => set({ token }),
}));

export const getSession = (): string | undefined =>
  useSessionStore.getState().token;

export default useSessionStore;
