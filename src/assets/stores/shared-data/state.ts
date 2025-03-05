import { StateCreator } from 'zustand/index';

export interface SharedGameState {
  loading: boolean;
  error: string | null;
}

export interface SharedGameAction {
  setError: (text: string) => void;
  setLoading: (state: boolean) => void;
}

export const createSharedSlice: StateCreator<
  SharedGameState & SharedGameAction,
  [],
  [],
  SharedGameState & SharedGameAction
> = (set) => ({
  error: null,
  loading: false,
  setError: (text: string | null) => set({ error: text }),
  setLoading: (state: boolean) => set({ loading: state }),
});
