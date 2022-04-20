import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const moviesTvSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
			const item = {
				title: action.payload.title,
				completed: false,
			};
			state.push(item);
		},
    },
});

export const { addToWatchlist } = moviesTvSlice.actions;

export default moviesTvSlice.reducer;