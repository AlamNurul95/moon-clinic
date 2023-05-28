import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';





const Services = (props) => {
  const { id,name,image,headings,details } = props.service;
    return (
        <div className='m-5' >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {headings}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>


          

{/* <Row xs={1} md={2} className="g-4">
      
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
     
    </Row>
            
        </div> */}
        </div>
    );
};

export default Services;