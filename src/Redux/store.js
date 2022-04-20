import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesTvSlice';
import watchlistSlice from './watchlistSlice';

export default configureStore({
    reducer: {
        moviesTv: moviesSlice,
        watchlist: watchlistSlice
    }
});