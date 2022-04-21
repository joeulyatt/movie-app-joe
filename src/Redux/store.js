import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesTvSlice';
import watchlistSlice from './watchlistSlice';
import searchSlice from './searchSlice';

export default configureStore({
    reducer: {
        moviesTv: moviesSlice,
        watchlist: watchlistSlice,
        search: searchSlice
    }
});