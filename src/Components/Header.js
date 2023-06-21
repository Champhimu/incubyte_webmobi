import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm">
            <Container>
                <Navbar.Brand className='text-primary fs-2 fw-bold' href="#home">Incubyte</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-primary' href="#about">About Us</Nav.Link>
                        <Nav.Link className='text-primary' href="#expertise">Our Expertise</Nav.Link>
                        <Nav.Link className='text-primary' href="#stories">Success Stories</Nav.Link>
                        <Nav.Link className='text-primary' href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    </>
  )
}

export default Header