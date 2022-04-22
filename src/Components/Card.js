import React, { useState } from 'react';
import WatchlistComponent from './WatchlistComponent';

const Card = ( {results, index, page} ) => {
    const [video, setVideo] = useState("");
    const [cardIdx, setCardIdx] = useState(); 
    const newResults = (page === "watchlist" ? results : results[index]);

    const getTrailer = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/${page}/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const trailerKey = json.results.find(e => e.name.includes("Trailer"));
        if (trailerKey == null) {
            return  
        } else {
            setVideo(trailerKey ? trailerKey.key : json.results[0].key);
            setCardIdx(idx);
        };
    };

    return ( 
        <>
            {newResults.map((movie, idx) => (
                <div 
                    className="movies image-container d-flex justify-content-start m-3" 
                    onMouseEnter={() => getTrailer(movie, idx)} 
                    key={movie.id}
                >
                    {idx === cardIdx ?
                        <iframe 
                            src={`https://www.youtube.com/embed/${video}?controls=0`} 
                            title={movie.title} 
                            className="overlay myVideo"
                        />
                    : null}
                    <img 
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                        alt={movie.Title} 
                        cSet=""
                    />
                    <div className="overlay">
                        <WatchlistComponent 
                            movie={movie} 
                            page={page}/> 
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;