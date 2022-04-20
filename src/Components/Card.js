import React, { useState } from 'react';

const Card = ( {results, index, page, FavouriteComponent, activeTab} ) => {
    const [video, setVideo] = useState("");
    const [movieIdx, setMovieIdx] = useState(); 

    const getTrailer = async (movie, idx) => {
        const url = `https://api.themoviedb.org/3/${page}/${movie.id}/videos?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        const key = json.results.find(e => e.name.includes("Trailer")).key
        setVideo(key)
        setMovieIdx(idx);
    };

    return ( 
        <>
            {results[index].map((movie, idx) => (
                <div className="movies image-container d-flex justify-content-start m-3" onMouseEnter={() => getTrailer(movie, idx)} key={movie.id}>
                {idx === movieIdx ?
                        <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} title={movie.title} className="overlay myVideo"></iframe>
                    : null}
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.Title} srcSet=""></img>
                    <div className="overlay">
                        {/* <FavouriteComponent 
                            movie={movie}
                        /> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;