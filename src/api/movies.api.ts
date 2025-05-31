import {AxiosResponse} from 'axios';
import {dispatchRequest} from '.';
import {MovieResponse} from './movie.api.types';

export const getPopularMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'popular',
    method: 'GET',
  });
