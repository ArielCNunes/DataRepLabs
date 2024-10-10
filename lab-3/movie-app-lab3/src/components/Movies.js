import React from 'react';
import MovieItem from './MovieItem';

// Map and pass movies to MovieItem
const Movies = ({ movies }) => {
    return (
        <div>
            <h1>Movie List</h1>
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.imdbID} />  // Passing each movie as a prop
            ))}
        </div>
    );
};

export default Movies;