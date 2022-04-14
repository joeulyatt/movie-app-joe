import React from 'react'

const AddFavourites = ( {favourites, movie, handleAddFavourite, handleRemoveFavourite} ) =>
!favourites.includes(movie) ? 
    <i className="myIcon heart bi bi-suit-heart" onClick={() => handleAddFavourite(movie)}></i>
    :
    <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
export default AddFavourites;