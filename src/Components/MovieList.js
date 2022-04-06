import React, { useEffect, useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, favourites, alreadyFavourited} ) => {
    const [video, setVideo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const getMovieVideo = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const newResults = json.results.filter(e => e.name === "Official Trailer")
        const id = newResults.map(e => e.key);
        const key = id.toString();
        setVideo(key)
        setMovieIdx(idx);
        setShowInfo(!showInfo);
    };

    // Ensures Info appears on correct movie
    useEffect(() => {
        setShowInfo(true)
    }, [movieIdx])

    // Hides info when favourite is removed
    useEffect(() => {
        setShowInfo(false)
    }, [favourites, movies])
    
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3"  onMouseEnter={() => getMovieVideo(movie, idx)}  key={idx}>
                    {idx === movieIdx && showInfo ?
                        <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} className="overlay myVideo"></iframe>
                    : null}
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    {FavouriteComponent !== null ?
                                <div onClick={() => handleFavourites(movie, idx)} className="overlay">
                                    <FavouriteComponent 
                                        alreadyFavourited={alreadyFavourited}
                                        favourites={favourites}
                                        movie={movie}
                                    />
                                </div>
                    : null}
                </div>
            ))}
        </>
    );
};

export default MovieList;