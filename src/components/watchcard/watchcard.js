import "./watchcard.css";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteItem } from "../../redux/thelist";
import { useNavigate } from "react-router-dom";

const Watchcard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=33b2284e92b97df923005c1736559da1`
      )
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.id]);

  if (!product) {
    return null;
  }

  const handleDelete = () => {
    dispatch(deleteItem(product.id));
  };

  const gotocarddetails = () => {
    navigate(`/moviedetails/${props.id}`);
  };
  return (
    <Card className="thewatchcard" style={{ width: "100%" }}>
      <Card.Img
        className="theimg"
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
      />
      <Card.Body>
        <div className="cardtitle">
          <Card.Title
            onClick={gotocarddetails}
            style={{ cursor: "pointer" }}
            className="thetitle"
          >
            {product.original_title}
          </Card.Title>
          <FontAwesomeIcon
            className="theheart"
            size="2x"
            style={{ color: "black" }}
            onClick={handleDelete}
            icon={faHeartCircleXmark}
          />
        </div>
        <p className="releasedate">{product.release_date}</p>
        <div className="pop">
          <div className="rating">
            <Rating
              allowFraction
              initialValue={Number(product.vote_average).toFixed(2) * 0.5}
              onClick={() => {}}
              readonly
            />
          </div>
          <p>{product.vote_count}</p>
        </div>
        <Card.Text className="desc">{product.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Watchcard;
