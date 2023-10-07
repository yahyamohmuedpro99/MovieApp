
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Header from './components/navbar'
function App() {
  

  return(
    <BrowserRouter>
          <Header/>
          <div className="">
        <Router/>
          </div>
    </BrowserRouter>
  );
}

export default App;
