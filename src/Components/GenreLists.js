import React from 'react';
import Cards from './Cards';

const GenreLists = ( {dataFile, results, page} ) => {
    return ( 
        dataFile.map((type, index) => (
            <div className="movies-list" key={index}>
                <h2>{type.genre}</h2>
                <div className="row movies flex-nowrap">
                    {results.length < dataFile.length ? null : 
                        <Cards
                            results={results}
                            index={index}
                            key={index}
                            page={page}
                        />
                    }
                </div>
            </div>
        ))
    );
};

export default GenreLists;