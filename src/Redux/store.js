import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesTvSlice';
import watchlistSlice from './watchlistSlice';
import searchSlice from './searchSlice';
import authSlice from './authSlice';
import messageSlice from './messageSlice';

export default configureStore({
    reducer: {
        moviesTv: moviesSlice,
        watchlist: watchlistSlice,
        search: searchSlice,
        auth: authSlice,
        message: messageSlice,
    }
});