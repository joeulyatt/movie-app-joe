import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults]);

    return ( 
        <div className="movies-list">
            <div className="row movies">
                <Card
                    results={searchResults}
                    page="watchlist"
                />
            </div>
        </div>
    );
};

export default SearchPage;