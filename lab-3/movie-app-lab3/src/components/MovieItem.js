import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';

// Render individual movie details
function MovieItem({ movie }) {
    // Log movie details to the console whenever the movie prop changes
    useEffect(() => {
        console.log("Movie Item:", movie);
    }, [movie]); // Only run this effect when the movie prop changes

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Header>{movie.Title}</Card.Header>
                    <blockquote className="blockquote mb-0">
                        <img src={movie.Poster} alt={movie.Title} />
                    </blockquote>
                    <Card.Footer>{movie.Year}</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;