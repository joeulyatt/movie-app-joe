import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchAsync, reset } from '../Redux/searchSlice';

const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isSearching, setIsSearching] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        isSearching ? navigate("../Search", { replace: true }) : navigate(-1);
    }, [isSearching])

    const getSearch = (e) => {
        dispatch(reset());
        dispatch(getSearchAsync(e));
        e ? setIsSearching(true) : setIsSearching(false);
        // if (e) {navigate("../Search", { replace: true })} else navigate(-1);
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