import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAsync } from '../Redux/moviesSlice';
import MovieHeading from '../Components/MovieHeading';

const movieTypes = ['Trending Today', 'Comedy', 'Horror', 'Action', 'Drama'];

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync(35));
    }, [dispatch]);

    return ( 
        <>
        {movieTypes.map((types) => (
            <div>
                <MovieHeading heading={types}/>
                {movies.map((e) => (
                    <img src ={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></img>
                ))}    
            </div>
        ))}

            {/* <MovieHeading heading={}/> */}
            <div className="row movies flex-nowrap">
                {/* <MovieList 
                        movies={handleType(types)} 
                        favourites={favourites}
                        handleAddFavourite={handleAddFavourite} 
                        handleRemoveFavourite={handleRemoveFavourite} 
                        FavouriteComponent={AddFavourites}
                        activeTab={activeTab}
                    /> */}
            </div>
            <div>
                <h1>Movies</h1>
                {movies.map((e) => (
                    <img src ={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}></img>
                ))}    
            </div>
        </>
    );
};

export default Movies;