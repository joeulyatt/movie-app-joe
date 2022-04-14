const defaultState = {
    trending: [],
    comedy: [],
    action: [],
    drama: [],
    horror: []
};

const allMoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD FAVOURITE':
            let movies = state.movies;
            movies.push(action.payload);
            return {
                ...state, 
                movies: movies
            };
        case 'REMOVE FAVOURITE':
            return state - action.payload;
        default:
            return state;
    };
};

export default allMoviesReducer;