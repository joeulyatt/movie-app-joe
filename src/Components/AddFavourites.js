import React from 'react'

const AddFavourites = ( {favourites, movie} ) =>
!favourites.includes(movie) ? 
    <i className="myIcon heart bi bi-suit-heart"></i>
    :
    <i className="myIcon heart bi bi-suit-heart-fill"></i>
export default AddFavourites;