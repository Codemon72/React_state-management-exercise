import { useState } from 'react'

const Movielist = () => {

  const [movies, setMovies] = useState([
    {
      name: 'Kiss the Ground',
      price: '$20',
      id: 1
    },
    {
      name: 'The Magic Pill',
      price: '$25',
      id: 2
    },
    {
      name: 'Shichinin no Samurai',
      price: '&#165;19',
      id: 3
    }
  ])

  return (
    <div>
      {movies.map(movie => (
        <h2>{ movie.name }</h2>
      ))}
      
    </div>
  )
}

export default Movielist
