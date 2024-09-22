import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';

const App = ()=>{
  return (
      <>
        <NavBar/>
        <Home/>
        <Experience/>
        <Skills/>
      </>
  )
}

export default App;
