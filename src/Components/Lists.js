import React from 'react'
import Card from './Card';

const Lists = ( {data, movieTv} ) => {
    return ( 
        data.map((types, index) => (
            <div className="movies-list">
                <h2>{types.genre}</h2>
                <div className="row movies flex-nowrap">
                    {movieTv.length < data.length ? null : 
                        <Card
                            movies={movieTv}
                            index={index}
                            
                        />
                    }
                </div>
            </div>
        ))
    );
};

export default Lists;