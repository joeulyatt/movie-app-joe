import React from 'react';

const SearchBox = ( {val, setVal}) => 
        <div className="col col-sm-4 me-4 align-self-center">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Here"
                value={val}
                onChange={e => setVal(e.target.value)}
            ></input>
        </div>

export default SearchBox;