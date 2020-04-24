import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import routes, { Link } from '../../../utils/routes';

import DATA from './home-page-slick.data';
import { SliderItem, SliderDots } from './home-page-slick.styled';

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

function HomePageSlick() {
  return (
    <Slider {...slickSettings}>
      {DATA.map((item) => (
        <SliderItem
          as={Link}
          to={`${routes.collections.path}/${item.id}`}
          title={item.alt}
          key={item.id}
        >
          <LazyLoadImage src={item.src} alt={item.alt} effect="blur"/>
        </SliderItem>
      ))}
    </Slider>
  );
}

export default HomePageSlick;
