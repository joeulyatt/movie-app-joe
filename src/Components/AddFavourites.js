import React from 'react'
import { addFavourite, removeFavourite } from '../actions';
import { useSelector, useDispatch } from 'react-redux';


const AddFavourites = ( {favourites, movie, handleAddFavourite, handleRemoveFavourite} ) => {

const dispatch = useDispatch()
// !favourites.includes(movie) ? 
return (
    <>
        {/* <i className="myIcon heart bi bi-suit-heart" onClick={() => handleAddFavourite(movie)}></i> */}
        <p onClick={() => dispatch(addFavourite(movie))}>hey</p>
    </>
)
    // :
    // <i className="myIcon heart bi bi-suit-heart-fill" onClick={() => handleRemoveFavourite(movie)}></i>
}
export default AddFavourites;