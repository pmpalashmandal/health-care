import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // load data and set data using useEffect
    useEffect(() => {
        fetch("./services.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="w-75 mx-auto mt-4">
            <h2 className="fw-bold p-2 mb-4 bg-secondary text-white">Our Treatments/Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    // map services and call Service component
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;