import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesSlice';
import { tvTypes } from '../data/tvTypes';

const TVShowsPage = () => {
    const tv = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
        tvTypes.forEach(e => {       
            dispatch(getMoviesTvAsync(e));     
        });
    }, [dispatch]);

    return ( 
        <>
            {tvTypes.map((types, index) => (
                <div className="movies-list">
                    <h2>{types.genre}</h2>
                    <div className="row movies flex-nowrap">
                        {tv.length < tvTypes.length ? null : 
                            tv[index].map((m) => (
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

export default TVShowsPage;