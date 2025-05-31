import {Movie} from '../../api/movie.api.types';

export interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
}
