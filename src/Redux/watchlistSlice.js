import { createSlice } from "@reduxjs/toolkit";

const localWatchlist = JSON.parse(localStorage.getItem('moviegojoe-watchlist'));

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: localWatchlist ? localWatchlist : [],
    reducers: {
        addWatchlist: (state, action) => {
			state.push(action.payload);
            localStorage.setItem('moviegojoe-watchlist', JSON.stringify(state));
		},
        removeWatchlist: (state, action) => {
            let newWatchlist = state.filter((item => item.id !== action.payload.id))
            localStorage.setItem('moviegojoe-watchlist', JSON.stringify(newWatchlist));
            return newWatchlist;
		},
    },
});

export const { addWatchlist, removeWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;