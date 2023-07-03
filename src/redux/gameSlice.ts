import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { gamesObj } from '../constants/games';
import { FieldFilterType, GameType } from '../types';
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
    gameOpened: (state, action: PayloadAction<string>) => {
      state.openedGameTitle = action.payload;
    },
    gamesFiltered: (state, action: PayloadAction<{ value: string; field: FieldFilterType }>) => {
      state.allGames =
        action.payload.field === 'provider'
          ? games.filter((game) => {
              return game[1]['provider'] === action.payload.value;
            })
          : games.filter((game) => {
              return Object.keys(game[1]['real']).includes(action.payload.value);
            });
    },
  },
});

export const { gameOpened, gamesFiltered } = gameSlice.actions;

export default gameSlice.reducer;
