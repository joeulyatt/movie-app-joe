import React from 'react';

const SearchBox = ( {val, setVal}) => {
    return ( 
        <div className="col col-sm-4">
            <input 
                className="form-control" 
                type="text" 
                placeholder="Search Here"
                value={val}
                onChange={e => setVal(e.target.value)}
            ></input>
        </div>
    );
};

export default SearchBox;