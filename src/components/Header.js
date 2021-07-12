import { Search } from '@material-ui/icons';
import React from 'react'
import '../assets/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = "header">
            <div className="left">
                <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8" alt=""/>

                <Link to="/MovieList" className="link">Movies</Link>    
                <Link to="/TvList" className="link">TV</Link>   
                <span>Free</span>
                <span>My List</span>
                
            </div>
            <div className="right">
           
                <Link to="/LogIn" className="link">Log In</Link>                
                <Link to="/Register" className="link">Sign In</Link>
                        
            
                <Search className="icon"/>
                


            </div>
         
        </div>
    )
}

export default Header
