import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist } from '../Redux/watchlistSlice';

const AddWatchlist = ( {favourites, movie} ) => {
    const watchlist = useSelector(state => state.watchlist)
    const dispatch = useDispatch();

    const handleAddWatchlist = (movie, idx) => {
        if (watchlist.includes(movie)) return;
        dispatch(addToWatchlist(movie));
        // if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        // setFavourites(newFavouriteList);
        // saveLocalStorage(newFavouriteList);
        console.log(watchlist)
    };
// !favourites.includes(movie) ? 
return (
    <>
        <i className="myIcon heart bi bi-suit-heart" onClick={() => dispatch(handleAddWatchlist(movie))}></i>
    </>
)
    // :
    // <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
}
export default AddWatchlist;