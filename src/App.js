import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TopNavBar from './TopNavBar';
//import RouterApp from './RouterApp.js';
import Home from './Home.js';
import Services from './Services';
import About from './About.js';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  //const[ isNavCollapsed, setIsNavCollapsed]=useState(true);

  function CallToActionMessage() {
    return (
      <div className="me-3 ms-3 text-center call-to-action">
        <p>Locked out of your car or house?</p>
        <p>Lost your keys? </p>
        <p>Need a copy of your transponder key or to program a new remote?</p>
        <p>Call 239-691-6019 for the best price around!</p>
      </div>
    );
  }

  return (
    <div id="home" className="main--container">
      <BrowserRouter>
        <TopNavBar />

        <section>
          <Home />
        </section>

        <CallToActionMessage />

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
