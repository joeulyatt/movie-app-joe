import React from 'react';

const MovieList = ( {movies, FavouriteComponent, handleAddFavourite} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3" key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    <div onClick={() => handleAddFavourite(movie)} className="overlay d-flex align-items=center justify-content-center">
                        <FavouriteComponent/>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MovieList;