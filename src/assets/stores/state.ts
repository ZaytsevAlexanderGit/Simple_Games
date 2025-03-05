import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  createSharedSlice,
  SharedGameAction,
  SharedGameState,
} from './shared-data/state.ts';
import {
  createRPSSlice,
  RPSGameAction,
  RPSGameState,
} from './rps-data/state.ts';
import {
  createTTTSlice,
  TTTGameAction,
  TTTGameState,
} from './ttt-data/state.ts';

export const ShareState = create<SharedGameState & SharedGameAction>()(
  devtools((...a) => ({
    ...createSharedSlice(...a),
  }))
);

export const RPSState = create<RPSGameState & RPSGameAction>()(
  devtools((...a) => ({
    ...createRPSSlice(...a),
  }))
);

export const TTTState = create<TTTGameState & TTTGameAction>()(
  devtools((...a) => ({
    ...createTTTSlice(...a),
  }))
);
