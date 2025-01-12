# React Movie Watchlist - Learning Context API

This project demonstrates the implementation of React's Context API to manage global state in a simple movie watchlist application. The application fetches movie data from TMDB API and allows users to add movies to a watchlist that persists across different components.

## Key Learning Points

1. **Context API Implementation**
   - Created a context using `createContext`
   - Wrapped the application with `Context.Provider` to share state
   - Accessed shared state in child components using `useContext` hook

2. **React Router Integration**
   - Set up routing between Home and Watchlist components
   - Learned that navigation using `Link` components maintains context state
   - Discovered that direct URL access resets context state as it's memory-based

3. **Component Communication**
   - Managed shared state between sibling components (Home and Watchlist)
   - Implemented state updates through context provider
   - Passed movie data through components effectively

4. **API Integration**
   - Fetched movie data from TMDB API
   - Handled async operations with useEffect
   - Managed loading states

## Project Structure

```
src/
├── App.jsx          # Main application component with routing and context provider
├── Home.jsx         # Movie listing and add to watchlist functionality
├── Watchlist.jsx    # Display of saved movies
└── contexts.jsx     # Context creation and export
```

## Known Issues

- Currently, the same movie can be added multiple times to the watchlist. This will be fixed in a future update but wasn't addressed as the primary focus was on learning Context API implementation.
- Context state resets on page refresh or direct URL access as it's stored in memory. This could be improved by implementing localStorage or a backend database.

## Technologies Used

- React 19
- React Router DOM
- Vite
- TMDB API

## Future Improvements

1. Implement duplicate prevention in watchlist
2. Add persistent storage using localStorage or a backend database
3. Add remove functionality for watchlist items
4. Improve UI/UX with better styling
5. Add search functionality for movies
6. Implement movie details view

## Key Takeaways

The project successfully demonstrates the use of Context API for state management across components. While there are some limitations and areas for improvement, the core functionality of sharing state between components was achieved, providing a solid foundation for understanding React's Context API in a practical application.