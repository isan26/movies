import { ReactNode } from 'react'


type MoviesContainerProps = {
    children: ReactNode
}
const MoviesContainer = ({ children }: MoviesContainerProps) => {
    return (
        <div className='movie-container'>{children}</div>
    )
}

export default MoviesContainer
