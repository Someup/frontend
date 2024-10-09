import { create } from 'zustand';
import { SummaryOptions } from '@/types/summary-types';

interface SummaryState {
  url: string;
  options: SummaryOptions;
  setUrl: (url: string) => void;
  setOptions: (options: SummaryOptions) => void;
}

export const useSummaryStore = create<SummaryState>((set) => ({
  url: '',
  options: {
    level: 'base',
    tone: 'casual',
    language: 'kr',
  },
  setUrl: (url) => set(() => ({ url })),
  setOptions: (options) => set(() => ({ options })),
}));
