import React from 'react'
import "./../styles.css"


function Savedmovies(props) {
  console.log(props)

    return (
    <div className='display_movie'>
    <span><div>Movie Title: {props.title}</div>
          <div>Movie Year: {props.year}</div>
    </span>
    <span>
    <button onClick={e => props.nominate(props.title)}>Nominate</button>
    <button onClick={e => props.delete(props.title)}>Delete From Saved</button>
    </span>
    {props.nominated && <div style={{'color': 'white', 'backgroundColor': 'green'}}>NOMINATED!!!</div>}
    </div>
  )
}

export default Savedmovies