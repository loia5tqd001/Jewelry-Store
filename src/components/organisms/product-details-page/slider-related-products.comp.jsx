import React from 'react';
import Slider from 'react-slick';
import newProducts from '../../../mock-data/new-products';

import SliderProductItem from '../../molecules/slider-product-item.comp';

import { SliderArrow } from './slider-related-products.styled';

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

function SliderNewProducts() {
  return (
    <div>
      <h2>Sản phẩm liên quan</h2>
      <Slider {...sliderSettings}>
        {newProducts.map((item) => (
          <SliderProductItem key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderNewProducts;
