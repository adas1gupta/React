import { useContext, useState } from "react"
import { WatchListContext } from "./contexts"

function Home ({movieArray}) {
    const [watchlistContext, setWatchListContext] = useContext(WatchListContext)

    function handleAdd (movie) {
        setWatchListContext([...watchlistContext, movie])
    }

    return (
        <div>
            <WatchListContext value={watchlistContext}>
            <ul>
                {Object.entries(movieArray).map((movie, index) => {
                    <div>
                        <li key={index}>{movie}</li>
                        <button onSubmit={() => handleAdd(movie)}>Add to Watch List</button>
                    </div>
                })}
            </ul>
            </WatchListContext>
        </div>
    )
}

export default Home