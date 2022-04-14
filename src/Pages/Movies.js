import React, { useEffect } from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return ( 
        <div>
        {movies.map((e) => e.title)}
            {movies.map((e) => (
                <img src ={e.poster_path}></img>
            ))}
            
        </div>
    );
}

export default Movies;