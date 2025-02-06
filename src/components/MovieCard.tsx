import { type Movie } from "../api/types"

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280";

type MovieProps = { movie: Movie }
export default function MovieCard
    ({ movie }: MovieProps) {
    return (
        <article className="movie-card">
            <figure>
                <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} />
            </figure>
            <aside>
                <header>{movie.title}</header>
                {movie.overview}
                <footer>{movie.release_date}</footer>
            </aside>
        </article>
    )
}
