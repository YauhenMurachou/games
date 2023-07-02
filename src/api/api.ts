import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://docs.googleapis.com/v1/documents/1DT2FUyuqX-eXvN-2rvzaPk1akIZVUvO_/export?mimeType=application/json',
    mode: 'no-cors',
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetAllGamesQuery } = gamesApi;
