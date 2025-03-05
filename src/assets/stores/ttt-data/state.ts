import { StateCreator } from 'zustand/index';
import { arrChange } from '../../../shared/utils.ts';

export type TTTGamePosib = 'none' | 'cross' | 'zero';
export type TTTWhoTurn = 'player1' | 'player2';
export type TTTCoordinates = {
  col: number;
  row: number;
  type: TTTGamePosib;
};

export interface TTTGameState {
  isNotEnded: boolean;
  touched: number;
  TTTAreaSize: number;
  TTTWinCondition: number;
  TTTArea: TTTGamePosib[][];
  TTTCurPlayer: TTTWhoTurn;
  TTTWinCoomb: number[][];
  // TTTPlayer1Score: number;
  // TTTPlayer2Score: number;
  TTTComment: string;
}

export interface TTTGameAction {
  setIsNotEnded: (data: boolean) => void;
  increaseTouched: () => void;
  resetTouched: () => void;
  setCellData: ({ col, row, type }: TTTCoordinates) => void;
  switchPlayer: () => void;
  resetPlayer: () => void;
  setTTTWinCoomb: (data: number[][]) => void;
  setTTTComment: (comment: string) => void;
  resetTTTArea: () => void;
}

export const createTTTSlice: StateCreator<
  TTTGameState & TTTGameAction,
  [],
  [],
  TTTGameState & TTTGameAction
> = (set) => ({
  isNotEnded: true,
  touched: 0,
  TTTAreaSize: 5,
  TTTWinCondition: 4,
  TTTCurPlayer: 'player1',
  TTTArea: [['none']],
  TTTWinCoomb: [[-1, -1]],
  TTTComment: "Player's 1 turn ❌",
  setIsNotEnded: (data: boolean) => set(() => ({ isNotEnded: data })),
  setCellData: ({ col, row, type }) =>
    set((state) => ({
      TTTArea: arrChange(state.TTTArea, col, row, type),
    })),
  resetTouched: () => set(() => ({ touched: 0 })),
  increaseTouched: () => set((state) => ({ touched: state.touched + 1 })),
  switchPlayer: () =>
    set((state) => ({
      TTTCurPlayer: `player${(state.touched % 2) + 1}` as TTTWhoTurn,
    })),
  resetPlayer: () => set(() => ({ TTTCurPlayer: 'player1' })),
  setTTTWinCoomb: (data) => set(() => ({ TTTWinCoomb: data })),
  setTTTComment: (comment: string) => set({ TTTComment: comment }),
  resetTTTArea: () =>
    set((state) => ({
      TTTArea: Array.from({ length: state.TTTAreaSize }, () =>
        Array(state.TTTAreaSize).fill('none')
      ),
    })),
});
