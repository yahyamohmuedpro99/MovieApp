import "./detailscard.css";
import Card from "react-bootstrap/Card";
import CircularRating from "../detailscard/ratingcircle";
import { useNavigate } from "react-router-dom";
const Detailscard = (props) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/moviedetails/${props.id}`);
  };
  return (
    <div onClick={goto} className="thecard">
      <Card style={{ width: "15rem", height: "22rem" }}>
        <Card.Img
          style={{ width: "15rem", height: "12rem" }}
          variant="top"
          src={props.img}
        />
        <Card.Body style={{ width: "15rem", height: "10rem" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.date}</Card.Text>
        </Card.Body>
      </Card>
      <div className="ratingcirc">
        <CircularRating rating={props.popularity} />
      </div>
    </div>
  );
};
export default Detailscard;
