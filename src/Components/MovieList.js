import React from 'react';

const MovieList = ( {movies} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div>
                    <img src={movie.Poster} alt={movie.imdbID} srcset=""></img>
                </div>
            ))}
        </>
    );
}

export default MovieList;