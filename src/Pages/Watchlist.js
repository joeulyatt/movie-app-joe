import React from 'react'
import '../App.css'
import Card from '../Components/Card';
import { useSelector } from 'react-redux';

const Watchlist = () => {
    const watchlist = useSelector(state => state.watchlist);

    return ( 
        <div className="movies-list">
            <div className="row movies flex-nowrap">
                <Card
                    results={watchlist}
                    page="watchlist"
                />
            </div>
        </div>
    );
}

export default Watchlist;
