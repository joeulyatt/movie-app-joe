import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const MovieList = ( {movies, favourites, handleAddFavourite, handleRemoveFavourite, FavouriteComponent, activeTab} ) => {
    const [video, setVideo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const watchList = useSelector(state => state.watchlist) 
    console.log(watchList)

    const getMovieVideo = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/${activeTab === "Movies" ? "movie" : "tv"}/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const key = json.results.find(e => e.name.includes("Trailer")).key
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
                <div className="movies image-container d-flex justify-content-start m-3"  onMouseEnter={() => getMovieVideo(movie, idx)}  key={movie.id}>
                    {idx === movieIdx ?
                        <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} title={movie.title} className="overlay myVideo"></iframe>
                    : null}
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    <div className="overlay">
                        <FavouriteComponent 
                            movie={movie}
                            idx={idx}
                            favourites={favourites}
                            handleAddFavourite={handleAddFavourite}
                            handleRemoveFavourite={handleRemoveFavourite}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;