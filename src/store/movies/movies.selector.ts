import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

const selectMovies = (state: RootState) => state.movies;

export const selectMoviesList = createSelector(
  selectMovies,
  movies => movies.movies || [],
);
