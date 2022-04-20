import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesSlice';
import { tvTypes } from '../data/tvTypes';
import Lists from '../Components/Lists';

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
        <Lists
            data={tvTypes}
            results={tv}
            page="tv"
        />
    );
};

export default TVShowsPage;