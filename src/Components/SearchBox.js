import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchAsync } from '../Redux/moviesTvSlice';

const SearchBox = () => {
    const [val, setVal] = useState("");
    const dispatch = useDispatch();

    const getSearch = (e) => {
        console.log(e)
    }

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