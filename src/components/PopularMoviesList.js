import React from "react";
import  MovieCard  from "./movieCard";

export default function PopularMoviesList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="m-4">
        <h2>Popular Movies</h2>
        <h1>No movies found</h1>
      </div>
    );
  }

  return (
    <div className="m-4">
      <h2>Popular Movies</h2>
      <div className="row d-flex justify-content-center ">
        {movies.map((movie, i) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
