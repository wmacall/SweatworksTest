import {AxiosResponse} from 'axios';
import {dispatchRequest} from '.';
import {MovieDetail, MovieResponse} from './movie.api.types';

export const getPopularMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'movie/popular',
    method: 'GET',
  });

export const getMovieDetail = (
  movieId: number,
): Promise<AxiosResponse<MovieDetail>> =>
  dispatchRequest({
    url: `movie/${movieId}`,
    method: 'GET',
  });

export const searchMovies = (
  query: string,
): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'search/movie',
    method: 'GET',
    params: {
      query,
    },
  });
