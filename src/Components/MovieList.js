import React, { useEffect, useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleAddFavourite, handleRemoveFavourite, favourites, alreadyFavourited} ) => {
    const [video, setVideo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const getMovieVideo = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const key = json.results.filter(e => e.name === "Official Trailer").map(e=>e.key).toString();
        setVideo(key)
        setMovieIdx(idx);
        setShowInfo(!showInfo);
    };

    // Ensures Video appears on correct movie
    useEffect(() => {
        setShowInfo(true)
    }, [movieIdx])

    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="movies image-container d-flex justify-content-start m-3"  onMouseEnter={() => getMovieVideo(movie, idx)}  key={idx}>
                    {idx === movieIdx && showInfo ?
                        <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} className="overlay myVideo"></iframe>
                    : null}
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    {FavouriteComponent !== null ?
                    <div className="overlay">
                        <FavouriteComponent 
                            alreadyFavourited={alreadyFavourited}
                            handleAddFavourite={handleAddFavourite}
                            handleRemoveFavourite={handleRemoveFavourite}
                            favourites={favourites}
                            movie={movie}
                            idx={idx}
                        />
                    </div>
                    : null}
                </div>
            ))}
        </>
    );
};

export default MovieList;