import { Route, Routes } from "react-router-dom";
import Watched from "../pages/Watched";
import Main from '../pages/Main'
import NotFound from "../pages/NotFound";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/watched-list" element={<Watched/>} />
            
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}