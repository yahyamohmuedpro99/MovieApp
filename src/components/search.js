import { useState } from 'react';


export default function Search(){
    const [query, setQuery] = useState("");
    return(
        <div className='col-9 p-2 m-2 text-center'>
            <input
            className="border border-none  w-100"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) =>{ setQuery(e.target.value)}}
            />
        </div>
    )
}
