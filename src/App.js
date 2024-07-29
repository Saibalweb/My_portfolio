import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';

const App = ()=>{
  return (
      <>
        <NavBar/>
        <Home/>
        <Skills/>
      </>
  )
}

export default App;
