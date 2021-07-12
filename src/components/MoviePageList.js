import {useContext, useEffect} from 'react'
import MoviePage from './MoviePage'
import movieContext from "../context/MovieContext";

const MoviePageList = () => {

    const {movies2,setMovies2} = useContext(movieContext);
    
    
   
    return (
        <div>
            {movies2.map((movie)=>(<MoviePage key={movie.id} key={movie.id} title={movie.title} imgPath={movie.imgPath} overview={movie.overview} rent={movie.rent} buy={movie.buy}/>))}
        </div>
    )
}

export default MoviePageList
