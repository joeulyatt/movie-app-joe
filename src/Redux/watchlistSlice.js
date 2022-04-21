import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addWatchlist: (state, action) => {
			state.push(action.payload);
		},
        removeWatchlist: (state, action) => {
			return state.filter((item => item.id !== action.payload.id))
		},
    },
});

export const { addWatchlist, removeWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;