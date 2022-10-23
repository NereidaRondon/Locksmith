import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './images/logo.png';

export default function TopNavBar() {
  return (
    <>
      <Container className="sticky" expand="lg">
        <Navbar bg="light" variant="light">
          <Container className="ms-0 me-0 justify-content-spacebetween">
            <Navbar.Brand href="#home">
              <img
                alt="Locksmith logo"
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top ms-0 logo"
              />{' '}
              <span className="header--title">Rey Rey's Locksmith</span>
            </Navbar.Brand>

            <div className="spanish text-center">Se habla Espa&ntilde;ol</div>
          </Container>
        </Navbar>

        {/* --------------- */}

        <Navbar bg="light" variant="dark" expand="lg" className="nav-link-bar">
          <Container className="nav-links--container m-auto justify-content-end">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="nav--links" as={Link} smooth to={'#'}>
                  Home
                </Nav.Link>

                <Nav.Link
                  className="nav--links"
                  as={Link}
                  smooth
                  to={'#services'}
                >
                  Services
                </Nav.Link>

                <Nav.Link className="nav--links" as={Link} to={'#about'}>
                  About
                </Nav.Link>

                <Nav.Link className="nav--links" as={Link} to={'#contact'}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
