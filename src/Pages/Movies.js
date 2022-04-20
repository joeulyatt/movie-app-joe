import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesSlice';
import { movieTypes } from '../data/movieTypes';

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
        <>
            {movieTypes.map((types, index) => (
                <div className="movies-list">
                    <h2>{types.genre}</h2>
                    <div className="row movies flex-nowrap">
                        {movies.length < movieTypes.length ? null : 
                            movies[index].map((m) => (
                                <div className="">
                                    <img src ={`https://image.tmdb.org/t/p/w200/${m.poster_path}`} alt={m.title}></img>
                                </div>
                            )) 
                        }
                    </div>
                </div>
            ))}
        </>
    );
};

export default MoviesPage;