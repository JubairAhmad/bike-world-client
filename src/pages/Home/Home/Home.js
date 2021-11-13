import React from 'react';
import Reviews from '../../Reviews/Reviews';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
           <div className='container'>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/6_n7ru1e-rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;