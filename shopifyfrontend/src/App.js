import React from 'react'
import { useState } from "react";

const API_KEY = "2b9bc719";

function App() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const queryApi = (keyword) => {
    setQuery(keyword)
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${keyword}`)
                  .then((res) => res.json())
                  .then((json) => {
                    setData(json)
                  })
    console.log(data);
  }
  return (
    <div>
      <h2>Shopify Front end</h2>
      <input type="text" onChange={e => queryApi(e.target.value)}></input>
      <h2>{query}</h2>
      <h2>results</h2>
      <ul>
        <li>Value 1 {query && <div>Title {data.Title} Year {data.Year} </div>} <button>Nominate</button></li>

      </ul>


    </div>
  );
}

export default App;
