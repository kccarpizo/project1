import {useState, useEffect} from 'react'
import MovieListItem from './MovieListItem'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";




const MovieList = () => {
    const [movies, setMovies] = useState([]);

        useEffect(() => {


        fetch ('http://localhost:8080/movies')
        .then(res=>res.json())
        .then(data => {console.log(data.bMessage); setMovies(data.bMessage)})

    }, [])
    
    
    return (
        <div className="movie-container">
            
            {movies.map((movie)=>(
                 <MovieListItem key={movie.id} key={movie.id} title={movie.title} imgPath={movie.sm}/> ))}
            
        </div>
    )
}

export default MovieList
