import React from 'react';
import { Container, Button } from 'react-bootstrap';
import event1 from "../../images/events-1.jpg";
import event2 from "../../images/events-2.jpg";
import event3 from "../../images/events-3.jpg";

import useServices from '../../Hooks/UseServices';
import './Home.css';

const Home = () => {
    const [service]=useServices();
    const sliceData=(service.slice(0,5));
  
    return (
        <div>
            <div className="banner-area">
                <div className="banner-heading text-light">
                    <h1>A Perfect Learning Center For Your Kids</h1>         
                    <h3>Play Explore And Learn</h3> 
                    <p>With us, Your kid will enjoy plenty of different activities that will develop them and act as a perfect ground for further devlopment.Explore the bright future of your child at <span className="text-warning">paradise Kids School.</span></p> 
                    <Button variant="primary me-5 mt-4 py-2 px-4 text-light">Sign Up</Button>
                    <Button variant="outline-primary mt-4 py-2 px-4 text-light border-light">Learn More</Button>
                </div>         
            </div>
            <Container>
                <div className="mb-5">
                    <h1 className="text-warning">Our Service</h1>
                    <h4>We are Unique in our Service</h4>  
                    <hr className="w-25 m-auto mt-3" />
                </div>
                              
                <div className="service-details">
                    {
                        sliceData.map(item=>
                            <div className="cart-container rounded" key={item.id}>
                                <img src={item.url} alt="service" className="h-50 w-100 mb-5 rounded" />
                                
                                <h4 className="text-start ps-4">Name: <span className="text-success">{item.name}</span></h4>
                                <h5 className="text-start ps-4">Duration: {item.duration}</h5>
                                <h5 className="text-start ps-4">Total Fees: {item.fees}$</h5>
                                <p className="text-start ps-4 ">In-charge Teacher: {item.teacher}</p>
                                <Button variant="outline-success px-5">Enroll Now</Button>
                            </div>                                             
                            )
                    }
                </div>
                <div>
                    <div className="mb-5">
                        <h1 className="text-warning">Our Events</h1> 
                        <hr className="w-25 m-auto mt-3" />
                    </div>
                    <div className="service-details">
                        <div className="events">
                            <img src={event1} alt="imm" />
                            <div className="overlay"> </div>
                            <h2 className="hover-text">This Day, We Celebrate World Family Celebration</h2>
                            <div className="event">
                                <div className="bg-primary text-light pt-4 px-3">
                                    <h4>30-October</h4>
                                </div>
                                <div className="bg-success pt-3 text-light w-100">
                                    <h4>Family Celebration</h4>
                                    <p>By: Samuel Roy</p>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <img src={event2} alt="imm" />
                            <div className="overlay"> </div>
                            <h2 className="hover-text">TWe Arrenged World Big Summer Draw Contest</h2>
                            <div className="event">
                                <div className="bg-primary text-light pt-4 px-3">
                                    <h4>05-June</h4>
                                </div>
                                <div className="bg-success pt-3 text-light w-100">
                                    <h4>Summer Drawing Contest</h4>
                                    <p>By: Elina Vasilaki</p>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <img src={event3} alt="imm" />
                            <div className="overlay"> </div>
                            <h2 className="hover-text">Respect Of Seniors, We Arranged Grandparents Day.</h2>
                            <div className="event">
                                <div className="bg-primary text-light pt-4 px-3">
                                    <h4>13-April</h4>
                                </div>
                                <div className="bg-success pt-3 text-light w-100">
                                    <h4>Grandparents Day</h4>
                                    <p>By: Robert Bruse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </Container>
        </div>
    );
};

export default Home;