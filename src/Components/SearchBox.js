import React from 'react';
import { useDispatch } from 'react-redux';
import { getSearchAsync, reset } from '../Redux/searchSlice';

const SearchBox = () => {
    const dispatch = useDispatch();

    const getSearch = (e) => {
        dispatch(reset())
        dispatch(getSearchAsync(e))
    };

    return (
        <div className="col col-sm-4 me-4 align-self-center">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Here"
                onChange={(e => getSearch(e.target.value))}
            ></input>
        </div>
    );
};

export default SearchBox;