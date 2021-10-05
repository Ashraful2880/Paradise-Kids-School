import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube,FaInstagram, FaPhoneAlt, FaEnvelope,FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-primary text-white">
            <div className="container d-flex py-5">
                <div className="mx-5 text-start ">
                    <h5 className="mb-4">Location</h5>
                    <p>37/5, ABC Road,</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="mx-5 text-start footer-border">
                    <h5 className="mb-4">Around The Web</h5>
                    <FaFacebook className="me-3 icon"> </FaFacebook>
                    <FaTwitter className="me-3 icon"> </FaTwitter>
                    <FaLinkedinIn className="me-3 icon"> </FaLinkedinIn>
                    <FaYoutube className="me-3 icon"> </FaYoutube>
                    <FaInstagram className="me-3 icon"></FaInstagram>
                </div>
                <div className="mx-5 text-start footer-border">
                    <h5 className="mb-4">Important Links</h5>
                    <Link className="text-white">Registration</Link>
                    <br />
                    <Link className="text-white">Admission</Link>
                    <br />
                    <Link className="text-white">More...</Link>
                </div>
                <div className="mx-5 text-start footer-border">
                    <h5 className="mb-4">Contact Us</h5>
                    <span><FaPhoneAlt className="my-1"></FaPhoneAlt> +880123456789</span>
                    <br />
                    <span><FaEnvelope className="my-1"></FaEnvelope> example.bd@gmail.com</span>
                    <br />
                    <span><FaWhatsapp className="my-1"></FaWhatsapp> +880123456789</span>
                </div>
            </div>
            <p className="pb-5">Copyright &copy; Paradise Kids School, All Rights Reserved</p>
        </div>
    );
};

export default Footer;