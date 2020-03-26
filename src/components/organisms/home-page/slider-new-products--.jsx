import React from 'react';
import Slider from 'react-slick';

import routes, { StyledLink } from '../../../routes';
import SliderProductItem from '../../molecules/slider-product-item--';

import DATA from './slider-new-products.data';
import { SliderArrow } from './slider-new-products.styled';

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
      <h2>
        <StyledLink to={routes.newProducts.path}>Sản phẩm mới</StyledLink>
      </h2>
      <Slider {...sliderSettings}>
        {DATA.map((item) => (
          <SliderProductItem key={item.productId} {...item} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderNewProducts;
