import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWatchlist, removeWatchlist } from '../Redux/watchlistSlice';

const WatchlistComponent = ( { movie, page } ) => {
    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();
    
    // Adds media_type key to movie so watchList can request video
    const addWatchlistClick = () => {
        const newMovie = {...movie};
        newMovie.media_type = (page === "movie" || page === "tv" ? page : movie.mediaType);
        dispatch(addWatchlist(newMovie));
        localStorage.setItem('moviegojoe-watchlist', JSON.stringify(watchlist));
    };

    return (
        <>
            {!watchlist.find(m => m.id === movie.id) ? 
                <i  
                    className="myIcon heart bi bi-suit-heart" 
                    onClick={() => addWatchlistClick()}
                />
            :   
                <i 
                    className={page === "watchlist" ? "myIcon bi bi-x-square" : "myIcon heart bi bi-suit-heart-fill"} 
                    onClick={() => dispatch(removeWatchlist(movie))}
                />
            }
        </>
    );
};

export default WatchlistComponent;