import React, { useEffect, useState, useCallback } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import Hero from "../components/hero";
import Search from "../components/search";
import PopularMoviesList from "../components/PopularMoviesList";

const key = "396e1f3a801a3992cc2ce865047a5109";

function Main() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filterByGenre = useCallback(
    (movies) => {
      const genreIdsToInclude = [27, 28, 80, 12]; 
      setMovies(
        movies.filter((movie) =>
          genreIdsToInclude.some((genreId) => movie.genre_ids.includes(genreId))
        )
      );
    },
    []
  );

  function updateQuery(movies) {
    filterByGenre(movies);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${currentPage}`
      )
      .then((response) => {
        console.log(response.data.results);
        filterByGenre(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage, filterByGenre]);

  return (
    <>
      <Hero>
        <Search
          newMovies={updateQuery}
          insted={(newPage) => setCurrentPage(newPage)}
        />
      </Hero>
      <PopularMoviesList movies={movies} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={10}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
}

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination d-flex justify-content-center">
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
    </div>
  );
}

export default Main;
