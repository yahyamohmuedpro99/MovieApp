import "./detailscard.css";
import Card from "react-bootstrap/Card";
import CircularRating from "../detailscard/ratingcircle";
const Detailscard = (props) => {
  return (
    <div className="thecard">
      <Card style={{ width: "15rem", height: "22rem" }}>
        <Card.Img
          style={{ width: "15rem", height: "15rem" }}
          variant="top"
          src={props.img}
        />
        <Card.Body>
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
