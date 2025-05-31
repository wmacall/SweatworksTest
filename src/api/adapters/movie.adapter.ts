import {Movie, MovieDetail} from '../movie.api.types';
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

export const adaptMovieDetailResponse = (movie: MovieDetail): MovieDetail => ({
  adult: movie.adult ?? false,
  backdrop_path: movie.backdrop_path
    ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
    : '',
  belongs_to_collection: movie.belongs_to_collection
    ? {
        id: movie.belongs_to_collection.id,
        name: movie.belongs_to_collection.name,
        poster_path: movie.belongs_to_collection.poster_path
          ? `${IMAGE_BASE_URL}${movie.belongs_to_collection.poster_path}`
          : '',
        backdrop_path: movie.belongs_to_collection.backdrop_path
          ? `${IMAGE_BASE_URL}${movie.belongs_to_collection.backdrop_path}`
          : '',
      }
    : null,
  budget: movie.budget ?? 0,
  genres: movie.genres.map(genre => ({
    id: genre.id,
    name: genre.name,
  })),
  homepage: movie.homepage ?? '',
  id: movie.id ?? 0,
  imdb_id: movie.imdb_id ?? '',
  origin_country: movie.origin_country ?? [],
  original_language: movie.original_language ?? 'unknown',
  original_title: movie.original_title ?? 'Untitled',
  overview: movie.overview ?? 'No overview available.',
  popularity: movie.popularity ?? 0,
  poster_path: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '',
  production_companies: movie.production_companies.map(company => ({
    id: company.id,
    logo_path: company.logo_path ? `${IMAGE_BASE_URL}${company.logo_path}` : '',
    name: company.name,
    origin_country: company.origin_country,
  })),
  production_countries: movie.production_countries.map(country => ({
    iso_3166_1: country.iso_3166_1,
    name: country.name,
  })),
  release_date: movie.release_date ?? 'Unknown',
  revenue: movie.revenue ?? 0,
  runtime: movie.runtime ?? 0,
  spoken_languages: movie.spoken_languages.map(language => ({
    english_name: language.english_name,
    iso_639_1: language.iso_639_1,
    name: language.name,
  })),
  status: movie.status ?? 'Unknown',
  tagline: movie.tagline ?? '',
  title: movie.title ?? 'Untitled',
  video: movie.video ?? false,
  vote_average: movie.vote_average ?? 0,
  vote_count: movie.vote_count ?? 0,
  genre_ids: movie.genre_ids ?? [],
});
