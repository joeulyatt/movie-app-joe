import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addWatchlist, removeWatchlist } from '../Redux/watchlistSlice';

const AddWatchlist = ( { movie, page } ) => {
    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();

    return (
        <>
            {!watchlist.find(m => m.id === movie.id) ? 
                <i className="myIcon heart bi bi-suit-heart" onClick={() => dispatch(addWatchlist(movie))}></i>
                :   
                <i className={page === "watchlist" ? "myIcon bi bi-x-square" : "myIcon heart bi bi-suit-heart-fill"} onClick={() => dispatch(removeWatchlist(movie))}></i>
            }
        </>
    );
}
export default AddWatchlist;