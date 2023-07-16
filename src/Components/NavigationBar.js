import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link, Outlet} from "react-router-dom";
import { GiBee } from "react-icons/gi";


function NavigationBar() {
    return (
        <>
            <Navbar className ="text-white" bg="dark" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand style={{ color: 'white', fontSize: '31px',fontFamily: 'Bumblebee', }}>
                      <GiBee size={32} style={{ color: 'white', marginRight: '5px' }}/>
                      Fizz Buzz
                  </Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link >
                          <Link to={"/"} style={{ color: 'white' }}>Home</Link>
                      </Nav.Link>
                      <Nav.Link >
                          <Link to={"/the-app"} style={{ color: 'white' }}>The App</Link>
                      </Nav.Link>
                      <Nav.Link >
                          <Link to={"/code"} style={{ color: 'white' }}>Code</Link>
                      </Nav.Link>
                      <Nav.Link >
                          <Link to={"/git-repo"} style={{ color: 'white' }}>Git Repo</Link>
                      </Nav.Link>
                      <Nav.Link >
                          <Link to={"/about"} style={{ color: 'white' }}>About</Link>
                      </Nav.Link>

                  </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavigationBar;
