import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WatchlistState} from './watchlist.slice.type';
import {MovieDetail} from '../../api/movie.api.types';

const initialState: WatchlistState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<MovieDetail>) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.watchlist = state.watchlist.filter(
        movie => movie.id !== action.payload,
      );
    },
  },
});

export const {addToWatchlist, removeFromWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;
