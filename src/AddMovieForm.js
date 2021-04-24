import {useContext, useState} from 'react'
import MovieContext from './MovieContext'

const AddMovieForm = () => {

  const [movies, setMovies] = useContext(MovieContext);

  const [addFormState, setAddFormState] = useState({
    name: '',
    year: ''
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAddFormState({...addFormState, [e.target.name]: value})
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies(prevMovies => [...prevMovies, { 
      name: addFormState.name, 
      year: addFormState.year
      }
    ])
  }
  return (
    <form onSubmit={addMovie}>
      <input 
        type="text" 
        placeholder="Movie Name"
        name="name"onChange={handleInputChange}/>
      <input 
        type="text" 
        placeholder="Movie Year"
        name="year" 
        onChange={handleInputChange}/>
      <input type="submit" />
    </form>
  )
}

export default AddMovieForm
