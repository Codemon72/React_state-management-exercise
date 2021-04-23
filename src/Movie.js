import React from 'react'

const Movie = ({ name, year }) => {
  return (
    <div className="movie">
      <h2>{name}</h2>
      <p>{year}</p>
    </div>
  )
}

export default Movie
