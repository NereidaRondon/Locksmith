import React from 'react';
import {Routes, Route } from 'react-router-dom';
//import Home from './Home.js';
import Services from './Services';
import About from './About.js';
import Contact from './Contact';
import Error from './Error';


export default function Router() {
  
  return (  
        <Routes>
          <Route exact path='/' element='#home' />
          <Route path='/services' element={ <Services /> } />
          <Route path='/about' element={ <About /> } /> 
          <Route path='/contact' element={ <Contact /> } />   
          <Route path='*' element={ <Error /> } /> 
        </Routes>
  );
}