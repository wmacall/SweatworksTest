import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

const selectMovies = (state: RootState) => state.movies;

export const selectMoviesList = createSelector(selectMovies, movies => {
  return {
    movies: movies.movies || [],
    nowPlayingMovies: movies.nowPlayingMovies.slice(0, 6) || [],
    upcomingMovies: movies.upcomingMovies.slice(0, 6) || [],
    topRatedMovies: movies.topRatedMovies.slice(0, 6) || [],
  };
});
