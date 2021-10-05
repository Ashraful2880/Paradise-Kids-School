import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand><img src="../logo.png" alt="Logo" className="w-25 bg-white rounded-circle" />
                </Navbar.Brand>
                        
                <Nav className="m-auto text-uppercase menu-area">
                    <Link to="/home" className="text-white px-3 text-decoration-none text-xl">Home</Link>
                    <Link to="/about" className="text-white px-3 text-decoration-none">About</Link>
                    <Link to="/services" className="text-white px-3 text-decoration-none">Services</Link>
                    <Link to="/contact" className="text-white px-3 text-decoration-none">Contact</Link>
                    <Link to="/about"></Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;