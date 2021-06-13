import React from 'react';
import Slider from 'react-slick';
import Image from 'gatsby-image';

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
            <img className="slider mt-90" src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg?impolicy=prdimg&imdensity=1&imwidth=1000" alt="slide img" />
        </div>
        <div>
            <img className="slider mt-90" src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg?impolicy=prdimg&imdensity=1&imwidth=1000" alt="slide img" />
        </div>
    </Slider>
</div>
)
};

export default MySlider