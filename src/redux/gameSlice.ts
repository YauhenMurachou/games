import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { gamesObj } from '../constants/games';
import { GameType } from '../types';
import { sortByPopularity, getUniqueFilter } from '../utils';

export type GameSlice = {
  allGames: [string, GameType][];
  showedGames: [string, GameType][];
  providers: string[];
  currency: string[];
  openedGameTitle?: string;
};

const games = sortByPopularity(Object.entries(gamesObj));
const providers = getUniqueFilter(games, 'provider');
const currency = getUniqueFilter(games, 'real');

const initialState: GameSlice = {
  allGames: games,
  showedGames: games.slice(0, 12),
  providers,
  currency,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesLoaded: (state, action: PayloadAction<{ index: number }>) => {
      state.showedGames = [
        ...state.showedGames,
        ...state.allGames.slice(action.payload.index + 1, action.payload.index + 13),
      ];
    },
    gameOpened: (state, action: PayloadAction<string>) => {
      state.openedGameTitle = action.payload;
    },
    gamesFiltered: (state, action: PayloadAction<{ value: string }>) => {
      // state.allGames.filter((game) => game[1][action.payload.field] === action.payload.value);
      state.allGames = games.filter((game) => {
        return game[1]['provider'] === action.payload.value;
      });
    },
  },
});

export const { gamesLoaded, gameOpened, gamesFiltered } = gameSlice.actions;

export default gameSlice.reducer;
