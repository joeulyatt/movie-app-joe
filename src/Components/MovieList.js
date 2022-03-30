import React from 'react';

const MovieList = ( {movies} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="d-flex justify-content-start m-3" key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                </div>
            ))}
        </>
    );
}

export default MovieList;