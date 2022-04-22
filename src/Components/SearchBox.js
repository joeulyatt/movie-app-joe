import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchAsync, resetSearch } from '../Redux/searchSlice';

const SearchBox = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [isSearching, setIsSearching] = useState(false)
    const [val, setVal] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     isSearching ?  : 
    // }, [isSearching])

    useEffect(() => {
        if (val) {
            navigate("../Search", { replace: true })
            dispatch(resetSearch());
            dispatch(getSearchAsync(val));
        } else {
            navigate("../Movies")
        };
    }, [val]);

    return (
        <div className="col col-sm-4 me-4 align-self-center">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Here"
                onChange={e => setVal(e.target.value)}
            ></input>
        </div>
    );
};

export default SearchBox;