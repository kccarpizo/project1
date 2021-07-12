
import '../assets/css/bootstrap.css';
import { Link } from 'react-router-dom';


const MovieListItem = ({ imgPath, title}) => {
    

    return (
    
        <div className="movie">   
           <Link to="/MoviePageList"><img src={imgPath} alt={title}/></Link>
            <div className="movie-info"> 
                <h3>{title}</h3>
            </div>
        </div>

    )
}

export default MovieListItem
