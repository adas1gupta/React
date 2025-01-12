import { useContext } from "react"
import { WatchListContext } from "./contexts"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Watchlist () {
    const [watchlist] = useContext(WatchListContext)

    return (
        <div>
            <h2>Watch List</h2>
                <Link to="/">Back to Movies</Link>
                <ul>
                    {watchlist.map((movie, index) => (
                        <div key={index}>
                            {console.log(movie)}
                        <li>{movie}</li>
                        </div>
                    ))}
                </ul>
        </div>
    )
}

export default Watchlist