import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';
import MovieList from '../Components/MovieList';

const movieTypes = ['Trending Today', 'Comedy', 'Horror', 'Action', 'Drama'];
const genres = [35, 27];

const movieTypes2 = [
    {
        genre: "Trending Today",
        type: "trending",
        format: "movie/day",
        code: "",
    },
    {
        genre: "Comedy",
        type: "discover",
        format: "movie",
        code: 35,
    },
    {
        genre: "Horror",
        type: "discover",
        format: "movie",
        code: 27,
    },
    {
        genre: "Action",
        type: "discover",
        format: "movie",
        code: 28,
    },
    {
        genre: "Drama",
        type: "discover",
        format: "movie",
        code: 18,
    }
]


const MoviesPage = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        movieTypes2.forEach(e => {       
            dispatch(getMoviesAsync(e));     
        });
    }, [dispatch]);



    return ( 
        <>
        {movieTypes.map((types, index) => (
            <div className="movies-list">
                <h2>{types}</h2>
                <div className="row movies flex-nowrap">
                {movies.length === 0 ? null : 
                    movies[index].map((m) => (
                        <div className="">
                            <img src ={`https://image.tmdb.org/t/p/w200/${m.poster_path}`}></img>
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