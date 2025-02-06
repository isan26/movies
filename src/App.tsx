import { useEffect, useState } from 'react'
import './App.css'

import { useFetchPopular, useFetchGenres } from './api/api'
import { type Movie } from './api/types'

import MoviesContainer from './containers/MoviesContainer';
import MovieCard from './components/MovieCard';


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadPopularMovies = useFetchPopular();
  const loadGenres = useFetchGenres();

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const result = await loadPopularMovies();
    const genres = await loadGenres();
    console.log({ genres })

    setMovies(result.results);
  }

  return (
    <>
      <MoviesContainer>
        <input
          type="search"
          name="search"
          placeholder="Search"
          aria-label="Search"
        />
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesContainer>
    </>
  )
}

export default App
