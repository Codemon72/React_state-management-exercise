import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

  const [movies, setMovies] = useState([
    {
      name: 'My Neighbour Totoro',
      year: '1988',
      id: 1
    },
    {
      name: `The Magic Pill`,
      year: '2017',
      id: 2
    },
    {
      name: `Howl's Moving Castle`,
      year: '2004',
      id: 3
    },
    {
      name: 'Shichinin no Samurai',
      year: '1954',
      id: 4
    }
  ])

  return (
    <MovieContext.Provider value={{movies, setMovies}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContext
