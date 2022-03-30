import React from 'react';

const MovieList = ( {movies} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt={movie.Title} key={movie.imdbID} srcset=""></img>
                </div>
            ))}
        </>
    );
}

export default MovieList;