// lib/skipCurtainStore.ts
import {create} from "zustand";

interface SkipCurtainState {
  skipNext: boolean;
  setSkip: () => void;
  clearSkip: () => void;
}

export const useSkipCurtainStore = create<SkipCurtainState>((set) => ({
  skipNext: false,
  setSkip: () => set({ skipNext: true }),
  clearSkip: () => set({ skipNext: false }),
}));
