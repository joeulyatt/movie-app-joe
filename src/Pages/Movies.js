import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, resetMovieTvSlice } from '../Redux/moviesTvSlice';
import { movieTypes } from '../data/movieTypes';
import Lists from '../Components/Lists';

const MoviesPage = () => {
    const movies = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMovieTvSlice());
        movieTypes.forEach(m => dispatch(getMoviesTvAsync(m)));
    }, [dispatch]);

    return ( 
        <Lists
            dataFile={movieTypes}
            results={movies}
            page="movie"
        />
    );
};

export default MoviesPage;