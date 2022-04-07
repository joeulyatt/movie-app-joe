import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBox from './Components/SearchBox';
import MovieHeading from './Components/MovieHeading';
import MovieList from './Components/MovieList';
import AddFavourites from './Components/AddFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import Footer from './Components/Footer';
import Logo from './img/logo.png';

const tabs = ['Movies', 'TV Shows', 'Watchlist'];
const movieTypes = ['Trending', 'Comedy', 'Horror', 'Action', 'Drama'];
const TVtypes = ['Trending', 'Soap', 'Comedy', 'Documentary', 'Drama'];

const App = () => {
    const [search, setSearch] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [val, setVal] = useState("");
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const getJson = async (genre, type, val) => {
        const url = `https://api.themoviedb.org/3/${type}/${activeTab === "Movies" ? "movie" : "tv"}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genre}&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        return json;
    };

    const getSearch = async (val) => {
        const e = await getJson(null, "search", val)
        setSearch(e.results ? e.results.filter(e => e.poster_path !== null) : []);
    };

    const getTrendingMovies = async () => {
        const url= `https://api.themoviedb.org/3/${activeTab === "Movies" ? "movie" : "tv"}/popular?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        setTrendingMovies(json.results);
    };

    const getComedyMovies = async () => {
        const e = await getJson("35", "discover")
        setComedyMovies(e.results);
    };

    const getHorrorMovies = async () => {
        const e = await getJson(activeTab === "Movies" ? "27" : "10766", "discover");
        setHorrorMovies(e.results);
    };

    const getActionMovies = async () => {
        const e = await getJson(activeTab === "Movies" ? "28" : "99", "discover");
        setActionMovies(e.results);
    };

    const getDramaMovies = async () => {
        const e = await getJson(activeTab === "18", "discover");
        setDramaMovies(e.results);
    };

    useEffect(() => {
        getTrendingMovies()
        getComedyMovies()
        getHorrorMovies()
        getActionMovies()
        getDramaMovies()
    }, [activeTab]);

    useEffect(() => {
        getSearch(val);
    }, [val, activeTab]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites'));
        setFavourites(movieFavourites)
    }, []);

    const saveLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    };

    const handleAddFavourite = (movie, idx) => {
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
        saveLocalStorage(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
        saveLocalStorage(newFavouriteList);
    };

    const handleType = (type) => {switch (type) {
        case 'Trending': return trendingMovies;
        case 'Comedy': return comedyMovies;
        case 'Horror': 
        case 'Soap': return horrorMovies;
        case 'Action':
        case 'Documentary': return actionMovies;
        case 'Drama': return dramaMovies;
        default: return trendingMovies;
    }}

    return (
        <div className="container-fluid movie-app">
            <div className="d-flex justify-content-between">
                <div class="mt-2 mb-2">
                    <img src={Logo} alt="" srcSet="" height="100px" className="me-5"></img>
                    {tabs.map(type => (
                    <button
                        className={activeTab === type ? "myButtonActive" : "myButton"}
                        key={type}
                        active={activeTab === type}
                        onClick={() => setActiveTab(type)}
                    >
                        <h1>{type}</h1>
                    </button>
                    ))}
                </div>
                <SearchBox val={val} setVal={setVal}/>
            </div>
            
            <div className="row movies">
                <MovieList 
                    movies={search} 
                    favourites={favourites}
                    handleAddFavourite={handleAddFavourite} 
                    handleRemoveFavourite={handleRemoveFavourite} 
                    FavouriteComponent={AddFavourites}
                    activeTab={activeTab}
                />
            </div>
            
            {activeTab !== "Watchlist" && !val ?
                <>
                    {(activeTab === "Movies" ? movieTypes : TVtypes).map((types) => (
                    <>
                        <MovieHeading heading={types}/>
                        <div className="row movies flex-nowrap">
                            <MovieList 
                                    movies={handleType(types)} 
                                    favourites={favourites}
                                    handleAddFavourite={handleAddFavourite} 
                                    handleRemoveFavourite={handleRemoveFavourite} 
                                    FavouriteComponent={AddFavourites}
                                    activeTab={activeTab}
                                />
                        </div>
                    </>
                    ))}
                </>
            :
                <>
                    <MovieHeading heading="Watchlist"/>
                    <div className="row movies">
                        <MovieList 
                            movies={favourites} 
                            favourites={favourites}
                            handleAddFavourite={handleAddFavourite} 
                            handleRemoveFavourite={handleRemoveFavourite} 
                            FavouriteComponent={RemoveFavourites}
                            activeTab={activeTab}
                        />
                    </div>
                </>
            }
            <Footer/>
        </div>
    );
};

export default App;