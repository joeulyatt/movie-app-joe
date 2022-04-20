import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addWatchlist: (state, action) => {
			state.push(action.payload);
            console.log(action.payload)
		},
        removeWatchlist: (state, action) => {
			return state.filter((e => e.id !== action.payload.id))
		},
    },
});

export const { addWatchlist, removeWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;