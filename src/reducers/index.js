import favouriteReducer from "./favourites";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    watchlist : favouriteReducer
});

export default allReducers;