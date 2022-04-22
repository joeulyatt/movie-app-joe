import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Card from '../Components/Card';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);

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