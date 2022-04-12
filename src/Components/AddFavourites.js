import React from 'react'


const AddFavourites = ( {favourites, movie, handleAddFavourite, handleRemoveFavourite} ) => {

// !favourites.includes(movie) ? 
return (
    <>
        {/* <i className="myIcon heart bi bi-suit-heart" onClick={() => handleAddFavourite(movie)}></i> */}
        <p onClick={() => handleAddFavourite(movie)}>hey</p>
    </>
)
    // :
    // <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
}
export default AddFavourites;