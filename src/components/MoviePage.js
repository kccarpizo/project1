import {useState, useEffect} from 'react'
import MoviePage from './MoviePage'
import {useParams} from "react-router-dom";

const MoviePageList = () => {

    const [movie, setMovies] = useState({
        title:"",
        sm:"",
        description :"",
        price:"" ,
        priceOut:""
});

    const {id} = useParams();


    useEffect(()=>{

        
        fetch(`http://localhost:8080/movies/${id}`)
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setMovies(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])

    
    
   
    return (
        <div className ="container">
            <h2>Title: {movie.title} </h2>
            <p><img src={movie.sm} /> </p>
            <p>{movie.description}</p> 
            <p>rent: {movie.price} </p>
            <p>buy: {movie.priceOut}</p>
        </div>
    )
}

export default MoviePageList
