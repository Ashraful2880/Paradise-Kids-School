import React from 'react';
import { Button } from 'react-bootstrap';
import "./Service.css"

const Service = (props) => {
    const{name,url,duration, fees,teacher}=props.service;
    return (
        <div>
            <div className="cart-container rounded-5">
                <img src={url} alt="service" className="h-50 w-100 mb-5" />
                <h4 className="text-start ps-4">Service Name: <span className="text-warning">{name}</span></h4>
                <h5 className="text-start ps-4">Service Duration: {duration}</h5>
                <h5 className="text-start ps-4">Total Fees: {fees}$</h5>
                <p className="text-start ps-4 ">In-charge Teacher: {teacher}</p>
                <Button variant="outline-success px-5">Enroll Now</Button>
            </div>
        </div>
    );
};

export default Service;