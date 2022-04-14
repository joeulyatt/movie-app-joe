import React, { useEffect } from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';


const TVShows = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync(28));
    }, [dispatch]);


    return ( 
        <div>
            <h1>TV shows</h1>
            {movies.map((e) => (
            <img src ={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></img>
            ))}
        </div>
    );
};

export default TVShows;