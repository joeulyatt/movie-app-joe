const initialUserState = {
    arr:[]
}

const favouriteReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'ADD FAVOURITE':
        return {
            ...state,
            arr: [...state.arr, action.payload]
        }
        case 'REMOVE FAVOURITE':
        return state - action.payload;
        default:
            return state;
    }
}

export default favouriteReducer