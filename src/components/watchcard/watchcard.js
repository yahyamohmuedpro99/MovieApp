import "./watchcard.css";
import Card from "react-bootstrap/Card";
import myImage from "./1.jpeg"; // Adjust the path as needed
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use

// Rest of your component code...

const Watchcard = () => {
  return (
    <Card className="thecard" style={{ width: "30rem" }}>
      <Card.Img className="theimg" variant="top" src={myImage} />
      <Card.Body>
        <div className="cardtitle">
          <Card.Title>Card Title</Card.Title>
          <FontAwesomeIcon
            className="theheart"
            icon={faHeart}
            size="2xl"
            style={{ color: "#ec2604" }}
          />
        </div>
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
            initialValue={Number(3.5).toFixed(2)}
            onClick={function noRefCheck() {}}
            readonly
          />
        </div>
        <Card.Text className="desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Watchcard;
