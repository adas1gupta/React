import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

function App () {
    const [movieArray, setMovieArray] = useState([])
    const [loading, setLoading] = useState(true)
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    async function fetchMovies() {
        const tmdbMovies = await fetch(`https://api.themoviedb.org/3/search/movie?${API_KEY}=YOUR_API_KEY&query=inception`)
        const movies = await tmdbMovies.json()
        setMovieArray(movies)
        setLoading(false)
    }

    useEffect(() => {
        fetchMovies()
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home movieArray={movieArray}/>} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)