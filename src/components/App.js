import React, { useEffect, useState } from 'react'
import Homepage from './Homepage';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/App.css';
import Register from './Register';
import LogIn from './LogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import movieContext from "../context/MovieContext";
import MovieList from './MovieList';
import TvList from './TvList';
import MoviePageList from './MoviePageList';

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch("http://localhost:5000/movies2")
      .then((res) => {
          return res.json()
      }).then(json => {
          setMovies(json);
      }).catch((e)=>{
          console.log(`Error ${e}`);
      })
  
  }, [])

  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
      fetch("http://localhost:5000/movies")
      .then((res) => {
          return res.json()
      }).then(json => {
          setMovies2(json);
      }).catch((e)=>{
          console.log(`Error ${e}`);
      })
  
  }, [])

  const [tv, setTv] = useState([]);
  useEffect(() => {
      fetch("http://localhost:5000/tv")
      .then((res) => {
          return res.json()
      }).then(json => {
          setTv(json);
      }).catch((e)=>{
          console.log(`Error ${e}`);
      })
  
  }, [])

  const [tv2, setTv2] = useState([]);
  useEffect(() => {
      fetch("http://localhost:5000/tv2")
      .then((res) => {
          return res.json()
      }).then(json => {
          setTv2(json);
      }).catch((e)=>{
          console.log(`Error ${e}`);
      })
  
  }, [])

  return (
    <div>
      <Router>
      
        <Switch>
        <movieContext.Provider value={{movies,setMovies, movies2, setMovies2, tv, setTv, tv2, setTv2}} >   
          <Route exact path="/Register"><Register/></Route>
          <Route exact path="/LogIn"><LogIn/></Route>
          <Route exact path="/"><Homepage/></Route>
          <Route exact path="/MovieList"><MovieList/></Route>
          <Route exact path="/TvList"><TvList/></Route>
          <Route exact path="/MoviePageList"><MoviePageList/></Route>
          <Route exact path="/Footer"><Footer/></Route>
          </movieContext.Provider >  
        </Switch>
       
        <Header/>
        
        
      </Router>

      
     
    </div>
  )
}

export default App

