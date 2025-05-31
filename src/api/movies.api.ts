import {AxiosResponse} from 'axios';
import {dispatchRequest} from '.';
import {
  MovieDetail,
  MovieResponse,
  MovieVideoResponse,
} from './movie.api.types';

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

export const getMovieVideos = (
  movieId: number,
): Promise<AxiosResponse<MovieVideoResponse>> =>
  dispatchRequest({
    url: `movie/${movieId}/videos`,
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

export const getNowPlayingMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'movie/now_playing',
    method: 'GET',
  });

export const getUpcomingMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'movie/upcoming',
    method: 'GET',
  });

export const getTopRatedMovies = (): Promise<AxiosResponse<MovieResponse>> =>
  dispatchRequest({
    url: 'movie/top_rated',
    method: 'GET',
  });
