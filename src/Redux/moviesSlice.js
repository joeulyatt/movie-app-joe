import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMoviesAsync = createAsyncThunk(
    'getMoviesAsync',
    async (genre) => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genre}`
        const response = await fetch(url);
        const json = await response.json();
        return json.results;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: [{}],
    extraReducers: {
        [getMoviesAsync.pending]: (state, action) => {
            console.log('waiting for movies')
        },        
        [getMoviesAsync.fulfilled]: (state, action) => {
            console.log('got movies')
            console.log(action.payload)
            return action.payload
        },        
    },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;