const favouriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD FAVOURITE':
        return  [...state, action.payload]
        case 'REMOVE FAVOURITE':
        return state - action.payload;
        default:
            return state;
    }
}

export default favouriteReducer