import React from 'react'
import '../assets/css/bootstrap.css';

const ListItems = ({title, imgPath}) => {
    return (
        <div className="listItem">   
            <img src={imgPath} alt={title}/>
        </div>

    )
}

export default ListItems
