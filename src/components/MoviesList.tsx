import { useState } from 'react'
import { FetchResult, type Movie } from "../api/types"


type MoviesContainerProps = {
    movies: FetchResult
}
const Movies = ({ movies }: MoviesContainerProps) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | false>(false);
    function closeDialog() {
        setSelectedMovie(false)
    }
    return (
        <div className='movie-container'>
            {!!selectedMovie && <MovieDialog movie={selectedMovie} close={closeDialog} />}
            {movies?.results.map(movie => <MovieCard
                key={movie.id}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
            />)}
        </div>
    )
}



const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280";
type MovieProps = { movie: Movie, setSelectedMovie: (movie: Movie) => void }
function MovieCard({ movie, setSelectedMovie }: MovieProps) {
    return (
        <article className="movie-card" onClick={() => setSelectedMovie(movie)}>
            <figure>
                <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} />
            </figure>
        </article>
    )
}

type MovieDialogProps = { movie: Movie, close: () => void }
const MovieDialog = ({ movie, close }: MovieDialogProps) => {
    console.log({ movie })
    return (
        <dialog open>
            <article>
                <header>
                    <button aria-label="Close" rel="prev" onClick={close}></button>
                    <p>
                        <strong>{movie.title}</strong>
                    </p>
                </header>
                <figure>
                    <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} />
                </figure>
                <p>
                    {movie.overview}
                </p>
                <footer>
                    <p>Release Date : {movie.release_date}</p>
                </footer>
            </article>
        </dialog>
    )
}

Movies.Movie = MovieCard;
Movies.MovieDialog = MovieDialog;

export default Movies
