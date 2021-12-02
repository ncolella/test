import React from 'react';
import SearchMoviesPage from './components/pages/SearchMoviesPage';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import MoviePage from "./components/pages/MoviePage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={   <SearchMoviesPage/>} />
                <Route path="/movie/:id" element={   <MoviePage/>} />
            </Routes>
        </Router>
    );
};

export default App;
