import React from 'react'
import { useState } from "react";

import Savedmovies from "./components/savedmovies"
import "./styles.css";

const API_KEY = "2b9bc719";
//let saved_movies_list = [];


function App() {

  var saved_movies_list = JSON.parse(localStorage.getItem('movieInfo')) || [];
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
      localStorage.setItem('movieInfo', JSON.stringify(saved_movies_list));
      window.location.reload(false);
    }else{
      window.alert("No Movie Currently Selected");
    }
    console.log(saved_movies_list);
  }

  let listMovies = saved_movies_list.map((movie, i) => {

    const deleteMovie = (title) => {
      saved_movies_list.splice(saved_movies_list.findIndex(movie => movie.Title === title), 1)
      localStorage.setItem('movieInfo', JSON.stringify(saved_movies_list));
      window.location.reload(false);
    }
    const nominateMovie = (title) => {
      saved_movies_list.forEach((movie) => {
        if (movie.Title === title) {
          movie.nominated = true;
          localStorage.setItem('movieInfo', JSON.stringify(saved_movies_list));
        }
        window.location.reload(false);
    })
    }
    return (
      <Savedmovies key={i} title={movie.Title} year={movie.Year} nominated={movie.nominated} delete={deleteMovie}
       nominate={nominateMovie} className='display_movie'/>
      )
});

  return (
    <div className='headers'>
      <h1>Shopify Frontend Intern Challenge</h1>
      <input type="text" onChange={e => queryApi(e.target.value)} className='searchbar' placeholder='search...'></input>
      <h2>Result</h2>
      { !query ? <div>No Movie Currently Entered</div> : 
      <div> 
        <div className='hometown'>Current Movie {query && <div>Title: {data.Title} Year: {data.Year} </div>} </div>
        <button onClick={e => setData({...data, nominated: true})}>Nominate</button>
        <button onClick={e => addMovie(data)}>Save Movie</button>
      </div>}

      
      <h2>Saved Movies</h2>
      <div className='centered'>
      {saved_movies_list && <div> {listMovies} </div>}
      </div>

    </div>
  );
}

export default App;
