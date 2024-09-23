import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';

const App = ()=>{
  return (
      <>
        <NavBar/>
        <Home/>
        <Experience/>
        <Skills/>
        <Project/>
      </>
  )
}

export default App;
