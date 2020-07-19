import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import { Container, CarouselContainer } from './product-details-slick.styled';

function ProductDetailsSlick({ images }) {
  return (
    <Container>
      <Carousel>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt="carousel item" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

ProductDetailsSlick.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ProductDetailsSlick.defaultProps = {
  images: [],
};

export default ProductDetailsSlick;
