import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details=useLoaderData();
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={details.image}/>
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default ServiceDetails;