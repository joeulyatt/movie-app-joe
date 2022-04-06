import React, { useEffect, useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, favourites, alreadyFavourited} ) => {
    const [info, setInfo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const getMovieInfo = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        setInfo(json);
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
                <div className="image-container d-flex justify-content-start m-3" onMouseEnter={() => getMovieInfo(movie, idx)} key={idx}>
                    {idx === movieIdx && showInfo ?
                        <div className="popup text-center" onClick={() => setShowInfo(false)}>
                            <span className="infoList show popuptext">
                                <div><span>Year: </span>{info.Year}</div>
                                <div><span>RunTime: </span>{info.Runtime}</div>
                                <div><span>Genre: </span>{info.Genre}</div>
                                <div><span>Actors: </span>{info.Actors}</div>
                            </span>
                            <span className="myPlot show popuptext">{info.overview}</span>
                        </div>
                    : null}
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    {FavouriteComponent !== null ?
                        <>
                            <div className="d-flex overlay w-100">
                                <div  className="col">
                                    <h2 className="myInfo">Info</h2>
                                </div>
                                <div onClick={() => handleFavourites(movie, idx)} className="col">
                                    <FavouriteComponent 
                                        alreadyFavourited={alreadyFavourited}
                                        favourites={favourites}
                                        movie={movie}
                                    />
                                </div>
                            </div>
                        </>
                    : null}
                </div>
            ))}
        </>
    );
};

export default MovieList;