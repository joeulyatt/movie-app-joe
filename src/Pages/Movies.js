import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesTvSlice';
import { movieTypes } from '../data/movieTypes';
import Lists from '../Components/Lists';

const MoviesPage = () => {
    const movies = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
        movieTypes.forEach(m => {       
            dispatch(getMoviesTvAsync(m));     
        });
    }, [dispatch]);

    return ( 
        <Lists
            data={movieTypes}
            results={movies}
            page="movie"
        />
    );
};

export default MoviesPage;