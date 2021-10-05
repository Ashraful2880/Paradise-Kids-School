import { Container } from 'react-bootstrap';
import Service from '../../Components/Service/Service';
import useServices from '../../Hooks/UseServices';
import './Services.css'

const Services = () => {
  const [services]=useServices();
    return (
        <Container>
            <div className="mb-5 pt-3">
                <h1>What We Do</h1>
                <h4>A Building With Four Walls And Tomorrow Inside.</h4>
                <h2>Our <span className="text-success">Awesome Services</span> </h2>
                <hr className="w-50 m-auto" />
            </div>
            <div className="service-details">
                {
                    services.map(service=><Service 
                        key={service.id}
                        service={service}
                        ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;