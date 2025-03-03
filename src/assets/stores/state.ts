import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type GamePosib = 'none' | 'scissors' | 'rock' | 'paper';

interface GameState {
  touched: number;
  player: GamePosib;
  computer: GamePosib;
  playerScore: number;
  computerScore: number;
  comment: string;
  loading: boolean;
  error: string | null;
}

interface GameAction {
  increaseTouched: () => void;
  setPlayerData: (figure: GamePosib) => void;
  setComputerData: (figure: GamePosib) => void;
  increasePlayerScore: (amount: number) => void;
  increaseComputerScore: (amount: number) => void;
  setComment: (comment: string) => void;
  setError: (text: string) => void;
  setLoading: (state: boolean) => void;
}

export const gameState = create<GameState & GameAction>()(
  devtools((set) => ({
    touched: false,
    player: 'none',
    computer: 'none',
    playerScore: 0,
    computerScore: 0,
    error: null,
    loading: false,
    comment: 'Choose your Hero.',
    setPlayerData: (figure: GamePosib) => set({ player: figure }),
    setComputerData: (figure: GamePosib) => set({ computer: figure }),
    increaseTouched: () => set((state) => ({ touched: state.touched + 1 })),
    increasePlayerScore: (amount: number) =>
      set((state) => ({ playerScore: state.playerScore + amount })),
    increaseComputerScore: (amount: number) =>
      set((state) => ({ computerScore: state.computerScore + amount })),
    setComment: (comment: string) => set({ comment: comment }),
    setError: (text: string | null) => set({ error: text }),
    setLoading: (state: boolean) => set({ loading: state }),
  }))
);
