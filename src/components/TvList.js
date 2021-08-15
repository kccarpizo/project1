import {useState, useEffect} from 'react'
import TvListItem from './TvListItem'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";

const TvList = () => {


    const [movies2, setMovies2] = useState([]);

        useEffect(() => {


        fetch ("http://localhost:8080/tvs")
        .then(res=>res.json())
        .then(data => {console.log(data.bMessage); setMovies2(data.bMessage)})

    }, [])
    

    
    return (
        <div className="movie-container">
             {movies2.map((tv)=>(<TvListItem key={tv.id} key={tv.id} title={tv.title} imgPath={tv.sm}/>))}
        </div>
    )
}

export default TvList

