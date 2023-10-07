import { useState, useEffect } from "react";
import axios from "axios";

export default function Search({ newMovies,instead }) {
  const key = "396e1f3a801a3992cc2ce865047a5109";
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
      )
      .then((res) => {
        console.log(res.data.results)
        query ? newMovies(res.data.results) : instead(1);
      })
      .catch((error) => console.error(error));
  }, [query, newMovies, instead]);
  
  return (
    <div className="col-12 p-2 m-2 text-center">
      <input
        className="d-inline border border-none w-100"
        style={{
          padding:'5px',
          borderRadius:'19px'

        }}
        type="text"
        placeholder="  Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

    </div>
  );
}
