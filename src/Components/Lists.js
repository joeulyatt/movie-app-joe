import React from 'react'
import Card from './Card';

const Lists = ( {data, results} ) => {
    return ( 
        data.map((type, index) => (
            <div className="movies-list">
                <h2>{type.genre}</h2>
                <div className="row movies flex-nowrap">
                    {results.length < data.length ? null : 
                        <Card
                            movies={results}
                            index={index}
                            
                        />
                    }
                </div>
            </div>
        ))
    );
};

export default Lists;