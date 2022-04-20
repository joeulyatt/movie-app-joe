import React, { useEffect } from 'react'
import '../App.css'
import Card from '../Components/Card';
import { useSelector } from 'react-redux';

const Watchlist = () => {
    const watchlist = useSelector(state => state.watchlist);

    useEffect(() => {
        console.log(watchlist[1])
    } )
    return ( 
        
        <div className="movies-list">
            <div className="row movies flex-nowrap">
                    <Card
                        results={watchlist}
                        index=""
                        page="watchlist"
                    />
            </div>
        </div>
    );
}

export default Watchlist;
