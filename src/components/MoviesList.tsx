import { ReactNode } from 'react'
import { type Movie } from "../api/types"


type MoviesContainerProps = {
    children: ReactNode
}
const Movies = ({ children }: MoviesContainerProps) => {
    return (
        <div className='movie-container'>{children}</div>
    )
}



const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280";
// https://moviesanywhere.com/home // Check this design
type MovieProps = { movie: Movie }
function MovieCard
    ({ movie }: MovieProps) {
    return (
        <article className="movie-card">
            <figure>
                <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} />
            </figure>
        </article>
    )
}

Movies.Movie = MovieCard;

export default Movies
