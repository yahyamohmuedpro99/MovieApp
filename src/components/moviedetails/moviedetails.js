import "./moviedetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Moviedetails = () => {
  const [movie, setMovie] = useState({});
  const param = useParams();
  useEffect(() => {
    axios.get(``);
  }, [param]);
  return;
};
export default Moviedetails;
