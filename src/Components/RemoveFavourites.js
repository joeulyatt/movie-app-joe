import React from 'react'

const RemoveFavourites = ( {handleRemoveFavourite, movie, idx} ) => <i className="myIcon bi bi-x-square" onClick={() => handleRemoveFavourite(movie, idx)}></i>

export default RemoveFavourites;