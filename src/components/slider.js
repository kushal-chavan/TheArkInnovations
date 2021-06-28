import React from 'react';
import Slider from 'react-slick';
import Image from 'gatsby-image';
import SilderOne from '../assets/images/slider/w1.jpg';
import SilderTwo from '../assets/images/slider/w3.jpg';

const MySlider = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


return (
<div>
    <Slider {...settings}>
        <div>
            <img className="slider mt-90" src={SilderOne} alt="slide img" />
        </div>
        <div>
            <img className="slider mt-90" src={SilderTwo} alt="slide img" />
        </div>
    </Slider>
</div>
)
};

export default MySlider