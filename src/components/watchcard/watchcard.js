import "./watchcard.css";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteItem } from "../../redux/thelist";

const Watchcard = (props) => {
  const dispatch = useDispatch();
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

  const deletemovie = () => {
    dispatch(deleteItem(product.id));
  };
  return (
    <Card className="thecard" style={{ width: "28rem" }}>
      <Card.Img
        className="theimg"
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
      />
      <Card.Body>
        <div className="cardtitle">
          <Card.Title className="thetitle">{product.original_title}</Card.Title>

          <FontAwesomeIcon
            className="theheart"
            icon={faHeart}
            size="2xl"
            style={{ color: "#ec2604" }}
            onClick={deletemovie}
          />
        </div>
        <p className="releasedate">{product.release_date}</p>
        <div className="pop">
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
              initialValue={Number(product.vote_average).toFixed(2) * 0.5}
              onClick={function noRefCheck() {}}
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
