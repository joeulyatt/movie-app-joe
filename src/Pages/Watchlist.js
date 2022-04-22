import React from 'react';
import '../App.css';
import Card from '../Components/Cards';
import { useSelector } from 'react-redux';

const Watchlist = () => {
    const watchlist = useSelector(state => state.watchlist);

    return ( 
        watchlist.length !== 0 ? 
            <div className="movies-list row movies">
                <Card
                    results={watchlist}
                    page="watchlist"
                />
            </div>
        :
            <h2 className="watchlist-empty">Watchlist empty</h2>
    );
};

export default Watchlist;
