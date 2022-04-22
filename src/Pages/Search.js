import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Card from '../Components/Cards';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);
    const [filteredResults, setFilteredResults] = useState([]);
    const location = useLocation();

    const filterMovies = () => {
        setFilteredResults(searchResults.filter(e => e.media_type === "movie"));
    };

    const filterTV = () => {
        setFilteredResults(searchResults.filter(e => e.media_type === "tv"));  
    };

    const filterAll = () => {
        setFilteredResults(searchResults);
    };

    useEffect(() => {
        setFilteredResults([]);
    }, [location])


    return ( 
        <div className="movies-list">
        <h2 className="text-end me-5">Filter
            <button onClick={() => filterMovies()}>Movies</button>
            <button onClick={() => filterTV()}>TV</button>
            <button onClick={() => filterAll()}>All</button>
        </h2>
            <div className="row movies">
                <Card
                    results={filteredResults.length === 0 ? searchResults : filteredResults}
                    page="watchlist"
                />
            </div>
        </div>
    );
};

export default SearchPage;