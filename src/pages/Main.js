import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import Hero from "../components/hero";
import Search from '../components/search'
const key = "396e1f3a801a3992cc2ce865047a5109";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  
  function updateQuery(movies){
    setMovies(movies)
  }
  function handlePage(current){
    setCurrentPage(current)
  }
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${currentPage}`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);
  return (
    <>
      <Hero>
        <Search newMovies={updateQuery} insted={(newPage) => setCurrentPage(newPage)}/>
      </Hero>
      <PopularMoviesList movies={movies}/>
        
      <Paginat
        currentPage={currentPage}
        totalPages={5}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
}



function PopularMoviesList({ movies ,children}) {
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
            <MovieCard movie={movie}/>
          ))}
        </div>
      </div>
    );
  }
  
function MovieCard({movie}) {
  return (
    <div xs={6} className="card m-1 col-sm-3 col-md-3 col-lg-2">
      <img
        className="card-img-top"
        src={` https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <small>
          {movie.release_date}
          <span className="d-inline d-flex justify-content-end">
            <AiFillHeart />
          </span>
        </small>
      </div>
    </div>
  );
}
function Paginat({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
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

export default App;
