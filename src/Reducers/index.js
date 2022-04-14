import favouriteReducer from "./favourites";
import allMoviesReducer from "./allMovies";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    watchlist : favouriteReducer,
    allMovies : allMoviesReducer
});

export default allReducers;
