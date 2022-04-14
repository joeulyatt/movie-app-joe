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
const movieTypes = ['Trending Today', 'Comedy', 'Horror', 'Action', 'Drama'];
const TVtypes = ['Trending Today', 'Soap', 'Comedy', 'Documentary', 'Drama'];

const App = () => {
    const [search, setSearch] = useState([]);
    const [trending, setTrending] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [actionDocumentary, setActionDocumentary] = useState([]);
    const [drama, setDrama] = useState([]);
    const [horrorSoap, setHorrorSoap] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [val, setVal] = useState("");
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const getJson = async (genre, type, val) => {
        const url = `https://api.themoviedb.org/3/${type}/${activeTab === "Movies" ? "movie" : "tv"}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genre}&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        return json;
    };

    const getTrending = async () => {
        const url= `https://api.themoviedb.org/3/trending/${activeTab === "Movies" ? "movie" : "tv"}/day?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        setTrending(json.results);
    };

    const getComedy = async () => {
        const e = await getJson("35", "discover")
        setComedy(e.results);
    };

    const getHorrorSoap = async () => {
        const e = await getJson(activeTab === "Movies" ? "27" : "10766", "discover");
        setHorrorSoap(e.results);
    };

    const getActionDocumentary = async () => {
        const e = await getJson(activeTab === "Movies" ? "28" : "99", "discover");
        setActionDocumentary(e.results);
    };

    const getDrama = async () => {
        const e = await getJson("18", "discover");
        setDrama(e.results);
    };

    useEffect(() => {
        getTrending()
        getComedy()
        getHorrorSoap()
        getActionDocumentary()
        getDrama()
    }, [activeTab]);

    useEffect(() => {
        if (val) {
            (async () => {
                const e = await getJson(null, "search", val)
                setSearch(e.results ? e.results.filter(e => e.poster_path !== null) : []);
            })()
        }
        else {setSearch([])}
    }, [val, activeTab]);

    // useEffect(() => {
    //     const movieFavourites = JSON.parse(
    //         localStorage.getItem('react-movie-app-favourites'));
    //     setFavourites(movieFavourites)
    // }, []);

    // const saveLocalStorage = (items) => {
    //     localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    // };

    const handleAddFavourite = (movie, idx) => {
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
        // saveLocalStorage(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
        // saveLocalStorage(newFavouriteList);
    };

    const handleType = (type) => {switch (type) {
        case 'Trending Today': return trending;
        case 'Comedy': return comedy;
        case 'Horror': 
        case 'Soap': return horrorSoap;
        case 'Action':
        case 'Documentary': return actionDocumentary;
        case 'Drama': return drama;
        default: return;
    }};

    return (
        <div className="container-fluid movie-app">
            <div className="d-flex justify-content-between">
                <div className="mt-2 mb-2">
                    <img src={Logo} alt="" srcSet="" height="100px" className="me-5"></img>
                    {tabs.map(type => (
                    <button
                        className={activeTab === type ? "myButtonActive" : "myButton"}
                        key={type}
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
                    <React.Fragment key={types}>
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
                    </React.Fragment>
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