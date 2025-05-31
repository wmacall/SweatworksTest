import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getPopularMovies} from '../../api/movies.api';
import {adaptMovieResponse} from '../../api/adapters/movie.adapter';
import {MoviesState} from './movies.slice.type';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await getPopularMovies();
    return adaptMovieResponse(response.data.results);
  },
);

const initialState: MoviesState = {
  movies: [],
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
      });
  },
});

export default moviesSlice.reducer;
