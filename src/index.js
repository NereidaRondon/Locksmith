import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
  
);


