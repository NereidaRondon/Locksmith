import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TopNavBar from './TopNavBar';
import Home from './Home.js';
import Services from './Services';
import About from './About.js';
//import Contact from './Contact';
import Footer from './Footer';
import mail from './images/mail.svg';

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

  function ContactAlternate() {
    return (
      <div className="contact-div">
        <h2 className="text-center contact--title">Contact Us</h2>
        <div className="about3 text-center">
          <h4 className="about--name">Reynaldo Hernandez</h4>
          <p className="about--par">Owner and Operator</p>
          <br></br>
          <h5 className="about--title">
            Call us at <br></br>
            <a href="tel:2396916019">(239)691-6019</a>
          </h5>

          <br></br>
          <br></br>
          <h5 className="about--title">reyreylocksmith@gmail.com</h5>
          <Mailto
            email="reyreylocksmith@gmail.com"
            subject="Rey Rey's Locksmith Customer Contact"
            body="I'm in need of your locksmith services."
          >
            <Envelope />
          </Mailto>
        </div>
      </div>
    );
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
        {props.children}
      </a>
    );
  }
  function Envelope() {
    return (
      <img
        className="email m-auto"
        alt="Click to Email"
        src={mail}
        width="50"
        height="50"
      />
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
          {/* <Contact /> */}
          <ContactAlternate />
        </section>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
