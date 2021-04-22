import React from 'react'

const Movie = ({ name, price }) => {
  return (
    <div className="movie">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default Movie
