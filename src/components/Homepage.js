import React from 'react'
import Header from './Header';
import Hero from './Hero';
import FeaturedMovies from './FeaturedMovies';
import '../assets/css/App.css';
import Footer from './Footer';
import Content from './Content';

const Homepage = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <FeaturedMovies titles1={"Featured Films"} titles2={"Featured Tv Series"}/>
                <Content/>
                <Footer/>
            </main>
           
        </div>
    )
}

export default Homepage
