import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import card1 from '../../../Assets/Services Card Image/card1.jpg';
import card2 from '../../../Assets/Services Card Image/card2.jpg';
import card3 from '../../../Assets/Services Card Image/card3.jpg';
import card4 from '../../../Assets/Services Card Image/card4.jpg';
import card5 from '../../../Assets/Services Card Image/card5.jpg';
import card6 from '../../../Assets/Services Card Image/card6.jpg';




const Services = () => {
    return (
        <div className='m-5'>
          <Row xs={1} md={3} className="g-2">
        <Col>
          <Card className=''>
            <Card.Img style={{height:"300px"}}  className='w-100' variant="top" src={card1}/>
            <Card.Body>
              <Card.Title>Regular Lab</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img style={{height:"300px"}}   variant="top" src={card2}/>
            <Card.Body>
              <Card.Title>Emergency Lab Support</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img style={{height:"300px"}}  variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Health Check-up</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img style={{height:"300px"}} variant="top" src={card4} />
            <Card.Body>
              <Card.Title>Ambulance Service</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Farmacy Service</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={card6} />
            <Card.Body>
              <Card.Title>Dental Care</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
    </Row>
            
        </div>
    );
};

export default Services;