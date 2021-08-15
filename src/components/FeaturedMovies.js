import {useState, useEffect} from 'react'
import ListItems from './ListItems'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";


const FeaturedMovies = ({titles1, titles2}) => {
    const [movies, setMovies] = useState([]);

        useEffect(() => {


        fetch ("http://localhost:8080/movies/featured?featured=true")
        .then(res=>res.json())
        .then(data => {console.log(data.bMessage); setMovies(data.bMessage)})

    }, [])

    const [movies2, setMovies2] = useState([]);

        useEffect(() => {


        fetch ("http://localhost:8080/tvs/featured?featured=true")
        .then(res=>res.json())
        .then(data => {console.log(data.bMessage); setMovies2(data.bMessage)})

    }, [])

    return (
       <> 
        <div className="featured">
             <span className="titleList" >{titles1}</span>
            <div className="list">
                {movies.map((movie)=>(<ListItems key={movie.id} key={movie.id} title={movie.title} imgPath={movie.sm}/>))}
            </div>
        </div>
        <div className="featured">
            <span className="titleList" >{titles2}</span>
            <div className="list">
                {movies2.map((movie)=>(<ListItems key={movie.id} key={movie.id} title={movie.title} imgPath={movie.sm}/>))}
            </div>
        </div>
        </>
    )
}

export default FeaturedMovies
