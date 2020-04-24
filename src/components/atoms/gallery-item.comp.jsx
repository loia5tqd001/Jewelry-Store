import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from './gallery-item.styled';

function GalleryItem({ srcImage }) {
  return (
    <Container>
      <LazyLoadImage src={srcImage} alt="gallery item" />
    </Container>
  );
}

GalleryItem.propTypes = {
  srcImage: PropTypes.string.isRequired,
};

export default GalleryItem;
