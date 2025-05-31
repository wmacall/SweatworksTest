import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from '../../api/movies.api';
import {adaptMovieResponse} from '../../api/adapters/movie.adapter';
import {MoviesState} from './movies.slice.type';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await getPopularMovies();
    return adaptMovieResponse(response.data.results);
  },
);

export const fetchNowPlayingMovies = createAsyncThunk(
  'movies/fetchNowPlayingMovies',
  async () => {
    const response = await getNowPlayingMovies();
    return adaptMovieResponse(response.data.results);
  },
);

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcomingMovies',
  async () => {
    const response = await getUpcomingMovies();
    return adaptMovieResponse(response.data.results);
  },
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRatedMovies',
  async () => {
    const response = await getTopRatedMovies();
    return adaptMovieResponse(response.data.results);
  },
);

const initialState: MoviesState = {
  movies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  isLoading: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovies.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
      });
  },
});

export default moviesSlice.reducer;
