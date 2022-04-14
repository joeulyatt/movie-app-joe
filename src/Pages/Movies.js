import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';
import MovieHeading from '../Components/MovieHeading';

const movieTypes = ['Trending Today', 'Comedy', 'Horror', 'Action', 'Drama'];

const MoviesList = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync(35));
    }, [dispatch]);

    return ( 
        <>
        
        {movieTypes.map((types) => (
            <div className="movies-list">
                <h2>{types}</h2>
                <div className="row movies flex-nowrap">
                {movies.map((e) => (
                    <div className="">
                        <img src ={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></img>
                    </div>
                ))}    
                </div>
            </div>
        ))}
        </>
    );
};

export default MoviesList;