import { useEffect, useState } from 'react'
import './App.css'

import { useFetchPopular, useFetchGenres, useSearchMovie } from './api/api'
import { FetchResult } from './api/types'

import SearchBar from './components/SearchBar'
import MoviesContainer from './components/MoviesList';



function App() {
  const [movies, setMovies] = useState<FetchResult>();
  const [searchText, setSearchText] = useState('');
  const [genres, setGenres] = useState<Record<string, number>>({})

  const loadPopularMovies = useFetchPopular();
  const loadGenres = useFetchGenres();
  const loadSearchMovies = useSearchMovie();


  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    if (searchText === '') {
      fetchMovies();
    } else {
      searchMovies();
    }
  }, [searchText])

  function fetchMovies() {
    loadPopularMovies().then(setMovies)
    loadGenres().then(setGenres)
  }

  async function searchMovies() {
    const movies = await loadSearchMovies(searchText, genres);

    setMovies(movies)
  }

  const genresText = Object.keys(genres).join(", ")

  return (
    <>
      <SearchBar setText={setSearchText} />
      <p>Genres: {genresText}</p>
      {movies && <MoviesContainer movies={movies} />}
    </>
  )
}

export default App
