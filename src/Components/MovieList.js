import React from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, getMovieInfo} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3 " key={idx}>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    {/* Checks init pic and displays AddToFavourites if false */}
                    <h1 className="overlay-top" onClick={() => getMovieInfo(movie)}>Plot</h1>
                    {FavouriteComponent !== null ?
                    <div onClick={() => handleFavourites(movie)} className="overlay d-flex align-items=center justify-content-center">
                        <FavouriteComponent/>
                    </div>
                    : null}
                </div>
            ))}
        </>
    );
}

export default MovieList;