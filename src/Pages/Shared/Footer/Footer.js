import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-primary text-light p-5'>
            <h2 className='mb-5'>Moon Hospital & Private Clinic</h2>
            <Row>
                <Col lg="6" className='d-none d-lg-block'>
                    <p>Moon Hospital located in Dhaka; one of the major cities of Bangladesh. We are a one-stop solution to all your health problems.
                        <br />
                        <span>
                            House No #23 ,Bloack#B,Mirpur-1 <br />
                            Dhaka-1100,Bangladesh.
                        </span>
                        <span>
                            Phone Number:0000222111
                        </span>
                    </p>
                </Col>
                <Col lg="6">
                   <h2>NEWSLETTER</h2>
                   <p className='mb-3'>Stay updated with our latest news and updates</p>
                   <input style={{width:"300px",height:"50px",borderRadius:"5px"}} type="email" name="email" id="" placeholder='Email'/>
                   <br />

                   <Button className='mt-3' variant="light">Submit</Button>
                  
                
                  
                </Col>
            </Row>

            
            

            
        </div>
    );
};

export default Footer;