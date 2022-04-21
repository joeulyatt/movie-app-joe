import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, reset } from '../Redux/moviesTvSlice';
import { tvTypes } from '../data/tvTypes';
import Lists from '../Components/Lists';

const TVShowsPage = () => {
    const tv = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
        tvTypes.forEach(t => {       
            dispatch(getMoviesTvAsync(t));     
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