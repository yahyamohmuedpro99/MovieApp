import "./watchlist.css";
import Watchcard from "../watchcard/watchcard";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const selector = useSelector((state) => state.thelist);
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  return (
    <div className="watchlist-content">
      <h1>Watch List</h1>

      {selector.length === 0 ? (
        <div className="nomovies">
          <p>No Movies In your Watch List!</p>
          <Button onClick={gotohome} variant="warning">
            Warning
          </Button>
        </div>
      ) : (
        <div className="listitems">
          {selector.map((itemid) => (
            <Watchcard key={itemid} id={itemid} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
