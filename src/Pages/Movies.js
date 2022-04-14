import React, { useEffect } from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync(35));
        dispatch(getMoviesAsync(27));
        dispatch(getMoviesAsync(28));
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return ( 
        <div>
        {movies.map((e) => (
            <img src ={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></img>
        ))}
            
        </div>
    );
}

export default Movies;