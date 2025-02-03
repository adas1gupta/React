import { useContext, useState } from "react"
import { WatchListContext } from "./contexts"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home ({movieArray}) {
    const [watchlistContext, setWatchListContext] = useContext(WatchListContext)


    function handleAdd (movie) {
        setWatchListContext([...watchlistContext, movie]);
    }

    return (
        <div>
            <Link to="/watchlist">Go to Watchlist</Link>
            <ul>
                {Object.entries(movieArray).map((movie, index) => (
                    <div key={index}>
                        <li>{movie[1].original_title}</li>
                        <button onClick={() => handleAdd(movie[1].original_title)}>Add to Watch List</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Home