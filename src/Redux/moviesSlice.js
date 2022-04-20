import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMoviesTvAsync = createAsyncThunk(
    'getMoviesTvAsync',
    async (data) => {
        const { type, format, code } = data
        const url = `https://api.themoviedb.org/3/${type}/${format}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${code}`
        const response = await fetch(url);
        const json = await response.json();
        return json.results;
    }
);

const initialState = [];

const moviesTvSlice = createSlice({
    name: "moviesTv",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: {  
        [getMoviesTvAsync.fulfilled]: (state, action) => {
            state.push(action.payload)
        },        
    },
});

export const { reset } = moviesTvSlice.actions;

export default moviesTvSlice.reducer;