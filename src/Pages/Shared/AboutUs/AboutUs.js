import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import img1 from '/projects/moon-clinic/src/Assets/About Us/img1.jpg';

const AboutUs = () => {
    return (
        <div className='m-5'>
              <Row>
                    <Col lg="6" className='d-none d-lg-block'>
                        <h1 className='text-primary'>About Us</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, provident nihil aliquid distinctio dolor qui? Nesciunt, non dignissimos unde consectetur ipsam beatae ullam, saepe dolore perferendis vero voluptatem nostrum quisquam cupiditate aliquid placeat voluptate laudantium ad exercitationem iste itaque voluptas est atque mollitia  <br /> <br /> Quia animi aliquam recusandae error rem. Sit amet ipsum alias obcaecati distinctio, repudiandae debitis rerum ipsam nostrum vitae fugit sunt consectetur sapiente ratione quas voluptates necessitatibus saepe culpa. Maiores, eaque, qui tenetur soluta non, amet accusantium inventore veritatis dignissimos deleniti officia voluptas! Corrupti repellat vitae harum aspernatur distinctio explicabo dicta at illum unde, impedit id debitis!
                        </p>
                        <Button variant="warning">Know More</Button>
                        
                    </Col>
                    <Col  lg="6">
                        <img  src={img1} className='w-75 mt-5 ' />
                    </Col>
                </Row>
            
        </div>
    );
};

export default AboutUs;