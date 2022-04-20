import React, { useEffect, useState } from 'react';


const MovieCard = ( {movies, index, favourites, handleAddFavourite, handleRemoveFavourite, FavouriteComponent, activeTab} ) => {
    const [video, setVideo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const getMovieVideo = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const key = json.results.find(e => e.name.includes("Trailer")).key
        setVideo(key)
        setMovieIdx(idx);
        setShowInfo(!showInfo);
        console.log(video)
    };
    // onMouseEnter={() => getMovieVideo(movie)}

    // Ensures Video appears on correct movie
    useEffect(() => {
        setShowInfo(true)
    }, [movieIdx])

    return ( 
        <>
            {movies[index].map((movie) => (
                <div className="movies image-container d-flex justify-content-start m-3"  key={movie.id}>

                        <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} title={movie.title} className="overlay myVideo"></iframe>

                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    <div className="overlay">
                        {/* <FavouriteComponent 
                            movie={movie}
                            favourites={favourites}
                            handleAddFavourite={handleAddFavourite}
                            handleRemoveFavourite={handleRemoveFavourite}
                        /> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieCard;