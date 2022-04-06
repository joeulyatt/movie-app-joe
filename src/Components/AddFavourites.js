import React from 'react'

const AddFavourites = ( {favourites, movie, handleAddFavourite, handleRemoveFavourite} ) =>
!favourites.includes(movie) ? 
    <i className="overlay myIcon heart bi bi-suit-heart" onClick={() => handleAddFavourite(movie)}></i>
    :
    <i className="overlay myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
export default AddFavourites;