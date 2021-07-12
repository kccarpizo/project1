
import { Button } from 'reactstrap';
import '../assets/css/bootstrap.css';


const MoviePage = ({id,title, rent, buy, imgPath, overview}) => {
    
    

    return (
        <div>
        <div className="hero">
            <img src={imgPath} alt=""/>
            <div className="title">
                <h3>{title}</h3>
                <span className="desc">{overview}</span>
                <div className="button">
                <Button color="danger">
                    <span>{rent}</span>
                </Button>
                <Button>
                    <span>{buy}</span>
                </Button>
            </div>
            </div>
            
        </div>

        </div>
    )
}

export default MoviePage
