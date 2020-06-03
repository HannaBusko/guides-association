import React from "react";
import Slider from "react-slick";

//import jazz1 from '../assets/images/jazz1.jpg';
import logo from '../assets/images/logo.svg';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

const SimpleSlider = ()=>(
        <div className="slider-block">
          <Slider {...settings}>
            <div>
              <img src={logo} alt="jazz"/>
            </div>
            <div>
              <img src={logo} alt="jazz"/>
            </div>
            <div>
              <img src={logo} alt="jazz" />
            </div>
          </Slider>
        </div>
      );

  export default SimpleSlider;