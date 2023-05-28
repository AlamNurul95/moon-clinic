import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';





const Services = (props) => {
  const { id,name,image,headings,details } = props.service;
    return (
        <div className='m-3'>
            <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) =>(
        <Col>
          <Card>
            <Card.Img style={{height:"300px"}} variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               {headings}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            ))}
    </Row>
        </div>
    );
};

export default Services;