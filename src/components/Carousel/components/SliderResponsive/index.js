import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

function SliderResponsive({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    dots, infinite, speed, slidesToShow, slidesToScroll, initialSlide, responsive,
  } = settings;

  return (
    <Slider
      dots={dots}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      initialSlide={initialSlide}
      responsive={responsive}
    >
      {children}
    </Slider>
  );
}

SliderResponsive.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default SliderResponsive;
