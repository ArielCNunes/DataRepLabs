import React from 'react';
import MovieItem from './MovieItem';

// Parent component - map (iterate) and pass movies to MovieItem
const Movies = ({ movies }) => {
    return (
        <div>
            <h1>Movie List</h1>
            {/** Looping through all movies */}
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.imdbID} />  // Passing each unique movie as a prop (object)
            ))}
        </div>
    );
};

export default Movies;