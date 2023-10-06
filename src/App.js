import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import Watchlist from "./components/watchlist/watchlist";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Moviedetails from "./components/moviedetails/moviedetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/" element={<Main />} />
        <Route path="/moviedetails/:id" element={<Moviedetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
