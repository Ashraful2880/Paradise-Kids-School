import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../images/about-im-1.jpg';
import image2 from '../../images/about-2.jpg';
import image3 from '../../images/about-4.jpg';
import image4 from '../../images/about-3.jpg';
import "./About.css";
const About = () => {
    return (
        <Container>
            <div>
                <h1 className="mt-4">A Few Words <span className="text-success">About Us</span></h1>
                <h3 className="mb-5">Quality is our Commitment.</h3> 
            </div> 
            <div className="about-container">
                <div>
                    <img src={image} alt="jfjd"/>
                </div>
                <div>
                    <h2 className="text-warning">Standart Class Room </h2>
                    <hr />
                    <p className="border p-3 text-start text-secondary mb-5 rounded description">The room which is used for teaching the students is called a classroom.It can accommodate as many as sixty students.It has two doors and four windows. As a result, we get sufficient air and light. The room is well electrified with three fans and two-tube lights. There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom. We are really proud of the room.TWe are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom. We are really proud of the room.</p>
                </div>
            </div>          
            <div className="about-container mt-5">
                <div>
                    <h2 className="text-warning">Special Model Test</h2>
                    <hr />
                    <p className="border p-3 text-start text-secondary mb-5 rounded description">Special Model Test & Ontime Class Test Finish Our Main Target.It can accommodate as many as sixty students.It has two doors and four windows. As a result, we get sufficient air and light. The room is well electrified with three fans and two-tube lights. There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom.</p>
                </div>
                <div>
                    <img src={image2} alt="jfjd"/>
                </div>
            </div>          
            <div className="about-container mt-5">
                <div>
                    <img src={image3} alt="jfjd"/>
                </div>
                <div>
                    <h2 className="text-warning">Available Space</h2>
                    <hr />
                    <p className="border p-3 text-start text-secondary mb-5 rounded description">Special Model Test & Ontime Class Test Finish Our Main Target.It can accommodate as many as sixty students.It has two doors and four windows. As a result, we get sufficient air and light. The room is well electrified with three fans and two-tube lights. There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom.There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom.</p>
                </div>                
            </div>          
            <div className="about-container mt-5 mb-5">
                <div>
                    <h2 className="text-warning">Guardian Council</h2>
                    <hr />
                    <p className="border p-3 text-start text-secondary mb-5 rounded description">Special Model Test & Ontime Class Test Finish Our Main Target.It can accommodate as many as sixty students.It has two doors and four windows. As a result, we get sufficient air and light. The room is well electrified with three fans and two-tube lights. There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom.There are twenty high benches and twenty low benches for the students. There is a platform with a chair and table for the teachers.We are very careful about keeping our classroom neat and clean. We feel very comfortable in our classroom.</p>
                </div>  
                <div>
                    <img src={image4} alt="jfjd"/>
                </div>              
            </div>          
        </Container>
    );
};

export default About;