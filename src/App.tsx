import { useEffect, useState } from 'react'
import './App.css'

import { useFetchPopular, useFetchGenres, useSearchMovie } from './api/api'
import { FetchResult } from './api/types'

import SearchBar from './components/SearchBar'
import MoviesContainer from './components/MoviesList';
import Spinner from './components/Spinner'



function App() {
  const [movies, setMovies] = useState<FetchResult>();
  const [searchText, setSearchText] = useState('');
  const [genres, setGenres] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState<boolean>(false);

  const loadPopularMovies = useFetchPopular();
  const loadGenres = useFetchGenres();
  const loadSearchMovies = useSearchMovie();


  useEffect(() => {
    setLoading(true)
    fetchMovies()
  }, [])

  useEffect(() => {
    setLoading(true)
    if (searchText === '') {
      fetchMovies();
    } else {
      searchMovies();
    }
  }, [searchText])

  async function fetchMovies() {
    await loadPopularMovies().then(setMovies)
    await loadGenres().then(setGenres)
    setLoading(false)
  }

  async function searchMovies() {
    await loadSearchMovies(searchText, genres).then(setMovies);
    setLoading(false)
  }

  const genresText = Object.keys(genres).join(", ")

  return (
    <>
      <SearchBar setText={setSearchText} />
      <p>Genres: {genresText}</p>
      {movies && <MoviesContainer movies={movies} />}
      {loading && <Spinner />}
    </>
  )
}

export default App
