import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import keys from './images/keys.png'; 
import emergency from './images/emergency.png';
import service from './images/service.png'; 

export default function SlideShow() {
  return (
    <div className='slideshow--container'>

      <Carousel variant="dark" className='slideshow'>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={emergency}
            alt="24 hours 7 days a week emergemcy service"
            width='300px'
            />
        </Carousel.Item>


        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={keys}
            alt="Keys and key fobs for all vehicles"
            width='300px'
            />
          <Carousel.Caption>
            <h5 className='slide-font'>Automotive, Residential, Commercial</h5>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={service}
            alt="Servicing Lee, Charlotte, and Collier county."
            width='300px'
            />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}





    



