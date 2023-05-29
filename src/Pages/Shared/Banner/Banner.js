import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '/projects/moon-clinic/src/Assets/Banner Img/img1.jpg';
import img2 from '/projects/moon-clinic/src/Assets/Banner Img/img2.jpg';
import img3 from '/projects/moon-clinic/src/Assets/Banner Img/img3.jpg';

const Banner = () => {
    return (
        <div>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:"500px"}}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Hospital</h3>
          <p>Partnership For Health</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Banner;