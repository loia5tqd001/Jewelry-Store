import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import SliderProductItem from '../molecules/slider-product-item.component';

import { Link, SliderArrow } from './slider-new-products.styles';

const DATA = [
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1500000,
    productSale: 13,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1200000,
    productSale: 13,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1400000,
    productSale: 13,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1500000,
    productSale: 6,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1300000,
    productSale: null,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1500000,
    productSale: null,
  },
  {
    productName: 'Yellow Gold Multi Sapphire & Diamond Ring',
    srcImage: 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
    srcOnHover: 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
    originalPrice: 1400000,
    productSale: 40,
  },
];

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
