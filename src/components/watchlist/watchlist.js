import "./watchlist.css";
import Watchcard from "../watchcard/watchcard";
const Watchlist = () => {
  return (
    <div className="watchlist-content">
      <h1>Watch List</h1>
      <div className="listitems">
        <Watchcard />
      </div>
    </div>
  );
};
export default Watchlist;
