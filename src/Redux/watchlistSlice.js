import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{
    "original_title": "The Batman",
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "video": false,
    "vote_average": 7.9,
    "title": "The Batman",
    "vote_count": 3216,
    "id": 414906,
    "release_date": "2022-03-01",
    "adult": false,
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "genre_ids": [
        80,
        9648,
        53
    ],
    "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    "original_language": "en",
    "popularity": 6485.727,
    "media_type": "movie"
},
{
    "adult": false,
    "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "genre_ids": [
        28,
        12,
        878
    ],
    "original_language": "en",
    "original_title": "Spider-Man: No Way Home",
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "id": 634649,
    "video": false,
    "vote_average": 8.2,
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    "release_date": "2021-12-15",
    "vote_count": 11747,
    "title": "Spider-Man: No Way Home",
    "popularity": 9695.89,
    "media_type": "movie"
},
]

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
			const item = {
				title: action.payload.title,
				completed: false,
			};
			state.push(item);
		},
    },
});

export const { addToWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;