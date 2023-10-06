import { Route, Routes } from "react-router-dom";
// import Watched from "../pages/Watched";
import Main from '../pages/Main'
import NotFound from "../pages/NotFound";
import Watchlist from '../components/watchlist/watchlist'
import Moviedetails from '../components/moviedetails/moviedetails'
export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/watched-list/" element={<Watchlist/>} />
            <Route path="/moviedetails/:id" element={<Moviedetails />} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}