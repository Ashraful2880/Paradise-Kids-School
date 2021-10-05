import React from 'react';
import { Container } from 'react-bootstrap';
import logo from "../../images/404.jpg"

const NotFound = () => {
    return (
        <Container className="my-5 pt-5">
            <img src={logo} alt="Error-message"/>
            <h1 className="text-center mt-4">404</h1>
            <h2 className="text-center">Page Not Found</h2>
        </Container>
    );
};

export default NotFound;