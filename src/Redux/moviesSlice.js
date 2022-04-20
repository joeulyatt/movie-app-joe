import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMoviesAsync = createAsyncThunk(
    'getMoviesAsync',
    async (data) => {
        const { type, code } = data
        console.log(type)
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${code}`
        const response = await fetch(url);
        const json = await response.json();
        return json.results;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    extraReducers: {  
        [getMoviesAsync.fulfilled]: (state, action) => {
            state.push(action.payload)
        },        
    },
});

// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;