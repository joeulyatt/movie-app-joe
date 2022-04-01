import React, { useEffect, useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites} ) => {
    const [plot, setPlot] = useState("");
    const [info, setInfo] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [plotIdx, setPlotIdx] = useState(); 

    const getMovieInfo = async (movie, idx) => {
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        setPlot(json.Plot);
        setInfo(json);
        setShowInfo(!showInfo);
        setPlotIdx(idx);
        console.log(movie)
    };

    // Ensures Info appears on correct movie
    useEffect(() => {
        setShowInfo(true)
    }, [plotIdx])

    useEffect(() => {
        setShowInfo(false)
    }, [handleFavourites])
    
    return ( 
        <>
            {movies.map((movie, idx) => (
            /* checks if img is available */
            movie.Poster !== "N/A" ?
                <div className="image-container d-flex justify-content-start m-3 " key={idx}>
                    <div className="popup">
                        <div>
                            {/* Shows Info when clicked, hides when clicked */}
                            <span
                                className={showInfo && idx === plotIdx ? "text-center myInfo show popuptext" : null}
                                id="myPopup"
                                onClick={() => setShowInfo(false)}
                            >
                                
                                {idx === plotIdx && showInfo ?
                                    (
                                    <div className="infoList">
                                        <div><span>Year: </span>{info.Year}</div>
                                        <div><span>RunTime: </span>{info.Runtime}</div>
                                        <div><span>Genre: </span>{info.Genre}</div>
                                        <div><span>Actors: </span>{info.Actors}</div>
                                    </div>
                                    )
                                : null}
                            </span>
                            {/* Shows movie plot*/}
                            <span
                                className={showInfo && idx === plotIdx ? "myPlot show popuptext" : null}
                                id="myPopup"
                                onClick={() => setShowInfo(false)}
                            >
                                {idx === plotIdx && showInfo ? plot : null}
                            </span>
                        </div>

                    </div>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    {/* Checks init pic and displays AddToFavourites if false */}
                    {FavouriteComponent !== null ?
                        <>
                            <div class="d-flex overlay w-100">
                                <div onClick={() => getMovieInfo(movie, idx)} className="col">
                                    <h2 className="myInfo">Info</h2>
                                </div>
                                <div onClick={() => handleFavourites(movie)} className="col">
                                    <FavouriteComponent/>
                                </div>
                            </div>
                        </>
                    : null}
                </div>
            : null
            ))}
        </>
    );
}

export default MovieList;