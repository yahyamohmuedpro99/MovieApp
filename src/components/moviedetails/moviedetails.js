import "./moviedetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { addItem } from "../../redux/thelist";
import MovieCard from '../movieCard.js'

const Moviedetails = () => {
  const [movie, setMovie] = useState({});
  const [reco, setReco] = useState([]);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}?api_key=33b2284e92b97df923005c1736559da1`
        );
        setMovie(movieResponse.data);

        const recoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}/recommendations?api_key=33b2284e92b97df923005c1736559da1`
        );
        setReco(recoResponse.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [param]);

  return (
    <div className="details-content">
      <Card className="details-card">
        <Card.Img
          className="detailimg"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body>
          <div className="detailtitle-content">
            <Card.Title className="detailtitle">
              {movie.original_title}
            </Card.Title>

            <FontAwesomeIcon
              className="theheart"
              icon={faHeart}
              size="2xl"
              style={{ color: "#ec2604" }}
              onClick={() => {
                dispatch(addItem(movie.id));
              }}
            />
          </div>
          <p className="detaildate">{movie.release_date}</p>
          <div className="detailpop">
            <div
              style={{
                direction: "ltr",
                fontFamily: "sans-serif",
                touchAction: "none",
                marginBottom: "1rem",
                fontSize: "20px",
                maxHeight: "2rem",
              }}
            >
              <Rating
                allowFraction
                initialValue={Number(movie.vote_average).toFixed(2) * 0.5}
                onClick={() => {}}
                readonly
              />
            </div>
            <p>{movie.vote_count}</p>
          </div>
          <Card.Text className="detaildesc ">{movie.overview}</Card.Text>
          <div className="tags">
            {movie.genres
              ? movie.genres.map((item, index) => (
                  <div key={index} className="tagitem">
                    {item.name}
                  </div>
                ))
              : null}
          </div>
          <div className="durandlang">
            <p>
              <b>Duration: </b>
              {movie.runtime}
            </p>
            <p>
              <b>Language: </b>
            </p>
            {movie.spoken_languages ? (
              movie.spoken_languages.map((item, index) => (
                <p style={{ display: "inline" }} key={index}>
                  {item.name}
                </p>
              ))
            ) : (
              <div>Loading languages...</div>
            )}
          </div>
          <div className="logos">
            {movie.production_companies
              ? movie.production_companies.map((item) => (
                  <img
                    className="logo"
                    src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                    alt="Company Logo"
                    key={item.id}
                  />
                ))
              : null}
          </div>
          <p
            onClick={() => {
              window.location.href = movie.homepage;
            }}
            className="towebsite"
          >
            Website
          </p>
        </Card.Body>
      </Card>
      <h1 className="recomtitle">Recommendations</h1>
      <div className="row d-flex justify-content-center ">
        {reco.length !== 0
          ? reco.map((item,i) => (
              <MovieCard movie={item} key={1}/>
            ))
          : null}
      </div>
    </div>
  );
};

export default Moviedetails;
