import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/thelist";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function MovieCard({ movie, isFavorite }) {
  const selector = useSelector((state) => state.thelist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleFavorite = () => {
    if (selector.includes(movie.id)) {
      // If the movie is already a favorite, remove it from the list
      dispatch(deleteItem(movie.id));
    } else {
      // If the movie is not a favorite, add it to the list
      dispatch(addItem(movie.id));
    }
  };

  return (
    <div className="card m-1 col-sm-3 col-md-3 col-lg-2">
      <div style={{ position: 'relative' }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="card"
        />
        <div
          style={{
            width: '40px',
            height: '40px',
            position: 'absolute',
            bottom: '-5px',
            right: '-5px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgressbar
            value={movie.vote_average * 10}
            text={`${movie.vote_average * 10} %`}
            strokeWidth="12"
            minValue="0"
            maxValue="100"
            background={true}
            styles={buildStyles({
              textColor: 'white',
              textSize: '22px',
              trailColor: 'black',
              backgroundColor: 'black',
              pathColor: 'green',
            })}
          />
        </div>
      </div>

      <div className="card-body ">
        <h5
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/moviedetails/${movie.id}`);
          }}
          className="card-title"
        >
          {movie.title}
        </h5>
        <small>
          {movie.release_date}
          <span
            onMouseEnter={toggleFavorite} // Only toggle on hover enter
            className="d-inline d-flex justify-content-end  watchedicon"
            style={{ cursor: 'pointer' }}
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </span>
        </small>
      </div>
    </div>
  );
}
