import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            console.log(action.payload)
			state.push(action.payload);
		},
    },
});

export const { addToWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;