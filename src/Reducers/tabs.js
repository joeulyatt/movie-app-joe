const tabReducer = (state = 'Movies', action) => {
    switch (action.type) {
        case 'MOVIES':
        return state = 'Movies'
        case 'TV_SHOWS':
        return state = 'TV_Shows'
        case 'WATCHLIST':
        return state = 'Watchlist'
        default:
            return state;
    }
}

export default tabReducer;