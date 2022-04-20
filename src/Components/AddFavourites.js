import React from 'react'


const AddFavourites = ( {favourites, movie} ) => {

    const handleAddFavourite = (movie, idx) => {
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
        saveLocalStorage(newFavouriteList);
    };
// !favourites.includes(movie) ? 
return (
    <>

    
        <i className="myIcon heart bi bi-suit-heart" onClick={() => handleAddFavourite(movie)}></i>
        <p onClick={() => handleAddFavourite(movie)}>hey</p>
    </>
)
    // :
    // <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
}
export default AddFavourites;