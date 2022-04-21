import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchAsync = createAsyncThunk(
    'getSearchAsync',
    async (val) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&query=${val}&page=1&include_adult=false`
        const response = await fetch(url);
        const json = await response.json();
        return json.results;
    }
);

const initialState = [];

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: {  
        [getSearchAsync.fulfilled]: (state, action) => {
            state.push(action.payload)
        },        
    },
});

export const { reset } = searchSlice.actions;

export default searchSlice.reducer;