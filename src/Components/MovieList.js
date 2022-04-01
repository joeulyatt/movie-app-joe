import React, { useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites} ) => {
    const [plot, setPlot] = useState("");
    const [info, setInfo] = useState("");
    const [showPlot, setShowPlot] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [plotIdx, setPlotIdx] = useState(); 

    const getMovieInfo = async (movie, idx) => {
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        setPlot(json.Plot);
        setInfo(json);
        setShowPlot(true);
        setShowInfo(true);
        setPlotIdx(idx);
    };
    
    return ( 
        <>
            {movies.map((movie, idx) => (
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
                                    <>
                                        <div>Year: {info.Year}</div>
                                        <div>RunTime: {info.Runtime}</div>
                                        <div>Genre: {info.Genre}</div>
                                        <div>Actors: {info.Actors}</div>
                                    </>
                                    )
                                : null}
                            </span>
                            {/* Shows movie plot when clicked, hides when clicked */}
                            <span
                                className={showInfo && idx === plotIdx ? "myPlot show popuptext" : null}
                                id="myPopup"
                                onClick={() => setShowPlot(false)}
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
                                    <h2>Info</h2>
                                </div>
                                {/* <div onClick={() => getMovieInfo(movie, idx)} className="info-overlay overlay d-flex align-items=center justify-content-center">
                                    <h2>Info</h2>
                                </div> */}
                                <div onClick={() => handleFavourites(movie)} className="col">
                                    <FavouriteComponent/>
                                </div>
                            </div>
                        </>
                    : null}
                </div>
            ))};
        </>
    );
}

export default MovieList;