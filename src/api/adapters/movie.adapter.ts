import {Movie} from '../movie.api.types';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const adaptMovieResponse = (movies: Movie[]): Movie[] =>
  movies.map(movie => ({
    adult: movie.adult ?? false,
    backdrop_path: movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : '',
    genre_ids: movie.genre_ids ?? [],
    id: movie.id ?? 0,
    original_language: movie.original_language ?? 'unknown',
    original_title: movie.original_title ?? 'Untitled',
    overview: movie.overview ?? 'No overview available.',
    popularity: movie.popularity ?? 0,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : '',
    release_date: movie.release_date ?? 'Unknown',
    title: movie.title ?? 'Untitled',
    video: movie.video ?? false,
    vote_average: movie.vote_average ?? 0,
    vote_count: movie.vote_count ?? 0,
  }));
