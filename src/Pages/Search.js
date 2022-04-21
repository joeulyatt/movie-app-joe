import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Card from '../Components/Card';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);
    const [searchParams, setSearchParams] = useSearchParams({});

    useEffect(() => {
        // console.log(searchResults)
        const val = searchResults.at(-1);
        if (!val) return
        setSearchParams({q: val});
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