import React from 'react';

// The Movies component receives the movies data as a prop
const Movies = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      {/* Mapping through the movies array to display each movie */}
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>IMDB ID: {movie.imdbID}</p>
          <p>Type: {movie.Type}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;