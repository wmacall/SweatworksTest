import {AxiosResponse} from 'axios';
import {dispatchRequest} from '.';
import {MovieDetail, MovieResponse} from './movie.api.types';

export const getPopularMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'popular',
    method: 'GET',
  });

export const getMovieDetail = (
  movieId: number,
): Promise<AxiosResponse<MovieDetail>> =>
  dispatchRequest({
    url: `${movieId}`,
    method: 'GET',
  });
