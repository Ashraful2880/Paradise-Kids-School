import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <Container className="mb-5 pt-3">
            <h1>Let's Get in Touch</h1>
            <h2 className="mb-5">Contact Us</h2>
            <div className="d-flex contact-container">
                <div className="pt-5 contact-field">
                    <h4>Don't Save Any Questions.</h4>
                    <h1 className="mb-5">Just Drop a Message</h1>
                    <input type="text" placeholder="Enter First Name" />
                    <br />
                    <input type="text" placeholder="Enter Last Name" />
                    <br />
                    <input type="email" placeholder="Enter Email" />
                    <textarea name="textatrea" cols="80" rows="5" placeholder="Your Message"></textarea>
                    <br />
                    <Button varient="primary" className="w-25 p-3 mt-3">Send</Button>
                </div>
                <div className="pt-5 w-50 pe-5 contact-text">
                    <h4 className="ms-4 mt-5 pt-5 contact-head">Feel Free To Contact me about any Questions. If you do that, I will be Happy</h4>
                    <br />
                    <h4 className="ms-4">I am Happy to Talk To You. Thank You.</h4>
                </div>
            </div>
        </Container>
    );
};

export default Contact;