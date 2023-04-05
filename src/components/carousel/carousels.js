import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './2.jpg';
/*import img2 from './2.jpg';
/*import img3 from './3.jpg';
import img4 from './';
import img5 from './';
import img6 from './';
/*import './carousels.css';*/



const carousels = () => {
  return (
    <div>
    <Carousel className='carousel-top'>
    <Carousel.Item>
      <div className='text'>
      <Carousel.Caption>
        <h4 className="home_text pz_10">WELCOME TO MY WORLD</h4>
        <h1 className="home_text pz_10">Hello, my name is</h1>
        <h2 className="home_text pz_10">Itissam Labidi</h2>
        <h3 className="home_text sweet pz_10">Full Stack developper </h3>

     
      </Carousel.Caption>

      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      /></div>
    </Carousel.Item>
    <Carousel.Item>
        
    </Carousel.Item>
    

  </Carousel>
    
    </div>
  );
  }

export default carousels

