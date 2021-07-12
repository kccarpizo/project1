import {useContext} from 'react'
import ListItems from './ListItems'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";


const FeaturedMovies = ({titles1, titles2}) => {
    const {movies,setMovies} = useContext(movieContext);
    const {tv2,setTv2} = useContext(movieContext);
    return (
       <> 
        <div className="featured">
             <span className="titleList" >{titles1}</span>
            <div className="list">
                {movies.map((movie)=>(<ListItems key={movie.id} key={movie.id} title={movie.title} imgPath={movie.imgPath}/>))}
            </div>
        </div>
        <div className="featured">
            <span className="titleList" >{titles2}</span>
            <div className="list">
                {tv2.map((movie)=>(<ListItems key={movie.id} key={movie.id} title={movie.title} imgPath={movie.imgPath}/>))}
            </div>
        </div>
        </>
    )
}

export default FeaturedMovies
