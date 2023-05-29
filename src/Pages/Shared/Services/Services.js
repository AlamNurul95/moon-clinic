import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';





const Services = (props) => {
  const {id, name,image,headings } = props.service;
  const navigate = useNavigate();
    const handleSubmit=()=>{
      navigate(`/serviceDetails/${id}`);
    }
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
              <Button onClick={handleSubmit} variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
            ))}
    </Row>
        </div>
    );
};

export default Services;