import { type Movie } from "../api/types"

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280";
// https://moviesanywhere.com/home // Check this design
type MovieProps = { movie: Movie }
export default function MovieCard
    ({ movie }: MovieProps) {
    return (
        <article className="movie-card">
            <figure>
                <img src={`${BASE_IMAGE_URL}/${movie.poster_path}`} />
            </figure>
        </article>
    )
}
