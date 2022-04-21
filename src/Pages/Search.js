import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Components/Card';

const SearchPage = () => {
    const searchResults = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(reset());
        // movieTypes.forEach(m => {       
        //     dispatch(getMoviesTvAsync(m));     
        // });
    }, [dispatch]);

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