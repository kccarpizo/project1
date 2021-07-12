import {useContext} from 'react'
import TvListItem from './TvListItem'
import '../assets/css/bootstrap.css';
import movieContext from "../context/MovieContext";

const TvList = () => {
    const {tv,setTv} = useContext(movieContext);
    return (
        <div className="movie-container">
             {tv.map((tv)=>(<TvListItem key={tv.id} key={tv.id} title={tv.title} imgPath={tv.imgPath}/>))}
        </div>
    )
}

export default TvList

