import React from 'react'
import { useState } from "react";

import Savedmovies from "./components/savedmovies"

const API_KEY = "2b9bc719";
let saved_movies_list = [];


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
    data.nominated = false;
    console.log(data);
  }


  const addMovie = (data) => {
    if (data.Title){
      saved_movies_list.push(data);
    }else{
      window.alert("No Movie Currently Selected");
    }
    console.log(saved_movies_list);

  }

  let listMovies = saved_movies_list.map((movie, i) => {
    return (
      <Savedmovies key={i} title={movie.Title} year={movie.Year} nominated={false}/>
      )
});

  return (
    <div className='hometown'>
      <h2>Shopify Front end</h2>
      <input type="text" onChange={e => queryApi(e.target.value)}></input>
      <h2>results</h2>
      { !query ? <div>No Movie Currently Entered</div> : 
      <div> 
        <div className='hometown'>Value 1 {query && <div>Title {data.Title} Year {data.Year} </div>} </div>
        <button>Nominate</button>
        <button onClick={e => addMovie(data)}>Save Movie</button>
      </div>}

      
      <h2>Saved Movies</h2>
      {saved_movies_list && <div> {listMovies} </div>}


    </div>
  );
}

export default App;
