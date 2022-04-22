import React from 'react';
import Card from './Card';

const Lists = ( {dataFile, results, page} ) => {
    return ( 
        dataFile.map((type, index) => (
            <div className="movies-list">
                <h2>{type.genre}</h2>
                <div className="row movies flex-nowrap">
                    {results.length < dataFile.length ? null : 
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