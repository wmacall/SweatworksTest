import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../';

export const selectWatchlist = (state: RootState) => state.watchlist;

export const selectWatchlistIds = createSelector(
  selectWatchlist,
  ({watchlist}) => watchlist.map(movie => movie.id),
);
export const selectWatchlistMovies = createSelector(
  selectWatchlist,
  watchlist => watchlist.watchlist || [],
);

export const selectIsInWatchlist = (id: number) =>
  createSelector(selectWatchlistIds, watchlistIds => watchlistIds.includes(id));

export const selectMovieInWatchlist = (id: number) =>
  createSelector(
    selectWatchlistMovies,
    watchlistMovies => watchlistMovies.find(movie => movie.id === id) || null,
  );
