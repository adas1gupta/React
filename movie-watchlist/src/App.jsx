import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./Watchlist";
import Home from "./Home";
import { WatchListContext } from "./contexts";

function App () {
    const [watchlist, setWatchlist] = useState([])
    const [movieArray, setMovieArray] = useState([])
    const [loading, setLoading] = useState(true)
    const API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;

    async function fetchMovies() {
        const tmdbMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=inception`);
        const movies = await tmdbMovies.json()
        setMovieArray(movies.results)
        setLoading(false)
    }

    useEffect(() => {
        fetchMovies()
    },[])

    return (
        <WatchListContext.Provider value={[watchlist, setWatchlist]}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home movieArray={movieArray}/>} />
                <Route path="/watchlist" element={<Watchlist/>} />
            </Routes>
        </BrowserRouter>
        </WatchListContext.Provider>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)