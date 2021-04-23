import {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const Movielist = () => {
  const [movies] = useContext(MovieContext)

  return (
    <div className="movielist">
      {movies.map(movie => (
        <Movie name={movie.name} year={movie.year} key={movie.id}/>
      ))}
    </div>
  )
}

export default Movielist
