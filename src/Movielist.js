import { useState } from 'react';
import Movie from './Movie';

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
      price: '$32',
      id: 3
    }
  ])

  return (
    <div className="movielist">
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>
  )
}

export default Movielist
