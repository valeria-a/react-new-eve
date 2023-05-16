import MovieCard from '../MovieCard/MovieCard';
import { MOVIES } from '../data'

export default function MovieList () {
    const items = MOVIES.map((movie) => {
        return <MovieCard key={movie.id} movie={movie}/>
    })

    return (
    <div className='movies'>
        {items}
    </div>
    )
}