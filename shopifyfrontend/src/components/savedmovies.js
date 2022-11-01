import React from 'react'


function Savedmovies(props) {
  console.log(props)
    return (
    <div>
    <span><div>Movie Title: {props.title}</div>
          <div>Movie Year: {props.year}</div>
    </span>
    <span><button>Nominate The Movie</button>
          <button>Delete From Saved</button>
    </span>
    </div>
  )
}

export default Savedmovies