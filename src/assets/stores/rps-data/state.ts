import { StateCreator } from 'zustand/index';

export type RPSGamePosib = 'none' | 'scissors' | 'rock' | 'paper';

const defaultRPSState: RPSGameState = {
  touched: 0,
  RPSPlayer: 'none',
  RPSComputer: 'none',
  RPSPlayerScore: 0,
  RPSComputerScore: 0,
  RPSComment: 'Choose your Hero.',
};

export interface RPSGameState {
  touched: number;
  RPSPlayer: RPSGamePosib;
  RPSComputer: RPSGamePosib;
  RPSPlayerScore: number;
  RPSComputerScore: number;
  RPSComment: string;
}

export interface RPSGameAction {
  increaseRPSTouched: () => void;
  setRPSPlayerData: (figure: RPSGamePosib) => void;
  setRPSComputerData: (figure: RPSGamePosib) => void;
  increaseRPSPlayerScore: (amount: number) => void;
  increaseRPSComputerScore: (amount: number) => void;
  setRPSComment: (comment: string) => void;
  resetRPSState: () => void;
}

export const createRPSSlice: StateCreator<
  RPSGameState & RPSGameAction,
  [],
  [],
  RPSGameState & RPSGameAction
> = (set) => ({
  touched: defaultRPSState.touched,
  RPSPlayer: defaultRPSState.RPSPlayer,
  RPSComputer: defaultRPSState.RPSComputer,
  RPSPlayerScore: defaultRPSState.RPSPlayerScore,
  RPSComputerScore: defaultRPSState.RPSComputerScore,
  RPSComment: defaultRPSState.RPSComment,
  setRPSPlayerData: (figure: RPSGamePosib) => set({ RPSPlayer: figure }),
  setRPSComputerData: (figure: RPSGamePosib) => set({ RPSComputer: figure }),
  increaseRPSTouched: () => set((state) => ({ touched: state.touched + 1 })),
  increaseRPSPlayerScore: (amount: number) =>
    set((state) => ({ RPSPlayerScore: state.RPSPlayerScore + amount })),
  increaseRPSComputerScore: (amount: number) =>
    set((state) => ({ RPSComputerScore: state.RPSComputerScore + amount })),
  setRPSComment: (comment: string) => set({ RPSComment: comment }),
  resetRPSState: () =>
    set(() => ({
      touched: defaultRPSState.touched,
      RPSPlayer: defaultRPSState.RPSPlayer,
      RPSComputer: defaultRPSState.RPSComputer,
      RPSPlayerScore: defaultRPSState.RPSPlayerScore,
      RPSComputerScore: defaultRPSState.RPSComputerScore,
      RPSComment: defaultRPSState.RPSComment,
    })),
});
