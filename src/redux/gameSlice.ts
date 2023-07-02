import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type GameSlice = {
  games: {} | null;
};

const initialState: GameSlice = {
  games: null,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesReceived: (state, action: PayloadAction<{}>) => {
      state.games = action.payload;
    },
  },
});

export const { gamesReceived } = gameSlice.actions;

export default gameSlice.reducer;
