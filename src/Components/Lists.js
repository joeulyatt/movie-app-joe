import React from 'react';
import Card from './Card';

const Lists = ( {data, results, page} ) => {
    return ( 
        data.map((type, index) => (
            <div className="movies-list">
                <h2>{type.genre}</h2>
                <div className="row movies flex-nowrap">
                    {results.length < data.length ? null : 
                        <Card
                            results={results}
                            index={index}
                            page={page}
                        />
                    }
                </div>
            </div>
        ))
    );
};

export default Lists;