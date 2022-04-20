import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addWatchlist, removeWatchlist } from '../Redux/watchlistSlice';

const AddWatchlist = ( {favourites, movie} ) => {
    const watchlist = useSelector(state => state.watchlist)
    const dispatch = useDispatch();

    const handleAddWatchlist = (movie, idx) => {
        if (!watchlist.includes(movie)) {
            dispatch(addWatchlist(movie));
        } else {
            dispatch(removeWatchlist(movie));
        }
        // if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        // setFavourites(newFavouriteList);
        // saveLocalStorage(newFavouriteList);
    };
// !favourites.includes(movie) ? 
return (
    <>
    {watchlist.includes(movie) ? 
        <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleAddWatchlist(movie)}></i>
        :   
        <i className="myIcon heart bi bi-suit-heart" onClick={() => handleAddWatchlist(movie)}></i>
    }
    </>
)
    // :
    // <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
}
export default AddWatchlist;