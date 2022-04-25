import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Cards from '../Components/Cards';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);
    const [filteredResults, setFilteredResults] = useState([]);
    const [active, setActive] = useState("all");
    const location = useLocation();
    const mediaType = searchResults

    const filterMovies = () => {
        setFilteredResults(searchResults.filter(e => e.media_type === "movie"));
        setActive("movies")
    };

    const filterTV = () => {
        setFilteredResults(searchResults.filter(e => e.media_type === "tv"));  
        setActive("tv")
    };

    const filterAll = () => {
        setFilteredResults(searchResults);
        setActive("all")
    };

    useEffect(() => {
        setFilteredResults([]);
    }, [location])


    return ( 
        <div className="movies-list">
        <div className="text-end me-5 mb-2 filterButtons">
            <h2>Filter</h2>
            <button 
                onClick={() => filterMovies()}
                className={active === "movies" ? "active" : null}
            >  
                Movies
            </button>
            <button 
                onClick={() => filterTV()}
                className={active === "tv" ? "active" : null}
            >  
                TV
            </button>
            <button 
                onClick={() => filterAll()}
                className={active === "all" ? "active" : null}
            >  
                All
            </button>
        </div>
            <div className="row movies">
                <Cards
                    results={filteredResults.length === 0 ? searchResults : filteredResults}
                    page="search"
                />
            </div>
        </div>
    );
};

export default SearchPage;