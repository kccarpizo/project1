import {useContext} from 'react'
import MovieListItem from './MovieListItem'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";




const MovieList = () => {
    const {movies2,setMovies2} = useContext(movieContext);
    
    
    return (
        <div className="movie-container">
            
            {movies2.map((movie)=>(
                 <MovieListItem key={movie.id} key={movie.id} title={movie.title} imgPath={movie.imgPath}/> ))}
            
        </div>
    )
}

export default MovieList
