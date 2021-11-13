import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../img/img1.jpg'
import img4 from '../../../img/img4.jpg'
import img5 from '../../../img/img5.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <Container sx={{mb:5}}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Container>
    );
};

export default Slider;