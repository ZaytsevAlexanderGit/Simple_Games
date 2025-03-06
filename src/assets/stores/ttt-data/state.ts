import { StateCreator } from 'zustand/index';
import { arrChange } from '../../../shared/utils.ts';

export type TTTGamePosib = 'none' | 'cross' | 'zero';
export type TTTWhoTurn = 'player1' | 'player2';
export type TTTCoordinates = {
  col: number;
  row: number;
  type: TTTGamePosib;
};

const defaultTTTGameState: TTTGameState = {
  isNotEnded: true,
  touched: 0,
  TTTAreaSize: 5,
  TTTWinCondition: 4,
  TTTCurPlayer: 'player1',
  TTTArea: [['none']],
  TTTWinCoomb: [[-1, -1]],
  TTTComment: "Player's 1 turn ❌",
};

export interface TTTGameState {
  isNotEnded: boolean;
  touched: number;
  TTTAreaSize: number;
  TTTWinCondition: number;
  TTTArea: TTTGamePosib[][];
  TTTCurPlayer: TTTWhoTurn;
  TTTWinCoomb: number[][];
  TTTComment: string;
}

export interface TTTGameAction {
  setIsNotEnded: (data: boolean) => void;
  increaseTouched: () => void;
  setCellData: ({ col, row, type }: TTTCoordinates) => void;
  switchPlayer: () => void;
  setTTTWinCoomb: (data: number[][]) => void;
  setTTTComment: (comment: string) => void;
  resetTTTArea: () => void;
  resetTTTGameState: () => void;
}

export const createTTTSlice: StateCreator<
  TTTGameState & TTTGameAction,
  [],
  [],
  TTTGameState & TTTGameAction
> = (set) => ({
  isNotEnded: defaultTTTGameState.isNotEnded,
  touched: defaultTTTGameState.touched,
  TTTAreaSize: defaultTTTGameState.TTTAreaSize,
  TTTWinCondition: defaultTTTGameState.TTTWinCondition,
  TTTCurPlayer: defaultTTTGameState.TTTCurPlayer,
  TTTArea: defaultTTTGameState.TTTArea,
  TTTWinCoomb: defaultTTTGameState.TTTWinCoomb,
  TTTComment: defaultTTTGameState.TTTComment,
  setIsNotEnded: (data: boolean) => set(() => ({ isNotEnded: data })),
  setCellData: ({ col, row, type }) =>
    set((state) => ({
      TTTArea: arrChange(state.TTTArea, col, row, type),
    })),
  increaseTouched: () => set((state) => ({ touched: state.touched + 1 })),
  switchPlayer: () =>
    set((state) => ({
      TTTCurPlayer: `player${(state.touched % 2) + 1}` as TTTWhoTurn,
    })),
  setTTTWinCoomb: (data) => set(() => ({ TTTWinCoomb: data })),
  setTTTComment: (comment: string) => set({ TTTComment: comment }),
  resetTTTArea: () =>
    set((state) => ({
      TTTArea: Array.from({ length: state.TTTAreaSize }, () =>
        Array(state.TTTAreaSize).fill('none')
      ),
    })),
  resetTTTGameState: () =>
    set(() => ({
      isNotEnded: defaultTTTGameState.isNotEnded,
      touched: defaultTTTGameState.touched,
      TTTAreaSize: defaultTTTGameState.TTTAreaSize,
      TTTWinCondition: defaultTTTGameState.TTTWinCondition,
      TTTCurPlayer: defaultTTTGameState.TTTCurPlayer,
      TTTArea: defaultTTTGameState.TTTArea,
      TTTWinCoomb: defaultTTTGameState.TTTWinCoomb,
      TTTComment: defaultTTTGameState.TTTComment,
    })),
});
