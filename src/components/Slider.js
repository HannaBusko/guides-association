import React from "react";
import Slider from "react-slick";

import slider1 from '../assets/images/nature1.jpg';
import slider2 from '../assets/images/nature5.jpg';
import slider3 from '../assets/images/nature2.jpg';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 6000
  };
  return (
    <div className="carrousel_wrapper"
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slider1})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slider2})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slider3})`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
