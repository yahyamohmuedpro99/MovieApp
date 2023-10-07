import "./detailscard.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Detailscard = (props) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/moviedetails/${props.id}`);
  };
  return (
    <Card
      className="thecard"
      onClick={goto}
      style={{ width: "15rem", height: "22rem" }}
    >
      <Card.Img
        style={{ width: "15rem", height: "12rem" }}
        variant="top"
        src={props.img}
      />
      <Card.Body style={{ width: "15rem", height: "10rem" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.date}</Card.Text>
      </Card.Body>
      <CircularProgressbar
        className="progressbar"
        value={props.popularity}
        text={`${props.popularity} %`}
        strokeWidth="12"
        minValue="0"
        maxValue="100"
        background={true}
        styles={buildStyles({
          textColor: "white",
          textSize: "22px",
          trailColor: "black",
          backgroundColor: "black",
          pathColor: "green",
        })}
      />
    </Card>
  );
};
export default Detailscard;
