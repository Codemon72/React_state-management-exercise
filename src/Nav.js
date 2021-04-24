import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <h2>Codemon72</h2>
      <p>List of Movies: {movies.length}</p>
    </nav>
  )
}

export default Nav
