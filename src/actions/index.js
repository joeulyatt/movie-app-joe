export const addFavourite = (movie) => {
    return {
        type: 'ADD FAVOURITE',
        payload: movie
    }
}

export const removeFavourite = (movie) => {
    return {
        type: 'REMOVE FAVOURITE',
        payload: movie
    }
};
