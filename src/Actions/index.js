export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

export const addFavourite = (movie) => {
    return {
        type: ADD_FAVOURITE,
        payload: movie
    }
}

export const removeFavourite = (movie) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: movie
    }
};