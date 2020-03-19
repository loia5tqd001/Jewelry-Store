import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { SliderItem, SliderDots } from './home-page-slick.styles';
import DATA from './home-page-slick.data';

const slickSettings = {
  dots: true,
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
  appendDots: (dots) => (
    <SliderDots>
      <ul>{dots}</ul>
    </SliderDots>
  ),
};

function HomePageSlick(props) {
  return (
    <Slider {...slickSettings}>
      {DATA.map((item) => (
        <SliderItem key={item.src}>
          <img src={item.src} alt={item.alt} />
        </SliderItem>
      ))}
    </Slider>
  );
}

HomePageSlick.propTypes = {};

export default HomePageSlick;
