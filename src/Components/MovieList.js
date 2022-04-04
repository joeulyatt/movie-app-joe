import React, { useEffect, useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, favourites, alreadyFavourited} ) => {
    const [info, setInfo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [movieIdx, setMovieIdx] = useState(); 

    const getMovieInfo = async (movie, idx) => {
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=ca4d40cb`;
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
            /* checks if img is available */
            movie.Poster !== "N/A" ? 
                <div className="image-container d-flex justify-content-start m-3" key={idx}>
                    {idx === movieIdx && showInfo ?
                        <div className="popup text-center" onClick={() => setShowInfo(false)}>
                            <span className="infoList show popuptext">
                                <div><span>Year: </span>{info.Year}</div>
                                <div><span>RunTime: </span>{info.Runtime}</div>
                                <div><span>Genre: </span>{info.Genre}</div>
                                <div><span>Actors: </span>{info.Actors}</div>
                            </span>
                            <span className="myPlot show popuptext">{info.Plot}</span>
                        </div>
                    : null}
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
            {/* Bottom section - Hides if initPic is true */}
                    {FavouriteComponent !== null ?
                        <>
                            <div className="d-flex overlay w-100">
                                <div onClick={() => getMovieInfo(movie, idx)} className="col">
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
            : null
            ))}
        </>
    );
};

export default MovieList;