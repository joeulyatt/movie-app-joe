import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchAsync, reset } from '../Redux/searchSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const getSearch = (e) => {
        dispatch(reset());
        dispatch(getSearchAsync(e));
        navigate("../Search", { replace: true })
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