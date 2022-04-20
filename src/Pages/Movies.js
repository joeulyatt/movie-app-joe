import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesSlice';
import { movieTypes } from '../data/movieTypes';
import Card from '../Components/Card';
import Lists from '../Components/Lists';

const MoviesPage = () => {
    const movies = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
        movieTypes.forEach(e => {       
            dispatch(getMoviesTvAsync(e));     
        });
    }, [dispatch]);

    return ( 
        <Lists
            data={movieTypes}
            results={movies}
        />
    );
};

export default MoviesPage;