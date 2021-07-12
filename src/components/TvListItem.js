import React from 'react'
import '../assets/css/bootstrap.css';

const TvListItem = ({title, imgPath}) => {
    return (
        
        <div className="movie">   
            <img src={imgPath} alt={title} />
            <div className="movie-info"> 
                <h3>{title}</h3>
            </div>
        </div>
        
    )
}

export default TvListItem
