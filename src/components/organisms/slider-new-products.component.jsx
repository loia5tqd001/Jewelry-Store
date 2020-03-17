import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import SliderProductItem from '../molecules/slider-product-item.component';

import { Link, SliderArrow } from './slider-new-products.styles';
import DATA from './slider-new-products.data';

const sliderSettings = {
  prevArrow: <SliderArrow data-anchor="left" />,
  nextArrow: <SliderArrow data-anchor="right" />,
  slidesToShow: 5,
  speed: 250,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 2, arrows: false },
    },
  ],
};

function SliderNewProducts(props) {
  return (
    <div>
      <h2>
        <Link>Sản phẩm mới</Link>
      </h2>
      <Slider {...sliderSettings}>
        {DATA.map((item, i) => (
          <SliderProductItem key={i} {...item} />
        ))}
      </Slider>
    </div>
  );
}

SliderNewProducts.propTypes = {};

export default SliderNewProducts;
