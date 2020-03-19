import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './gallery-item.styles';

function GalleryItem({ srcImage }) {
  return (
    <Container>
      <img src={srcImage} alt="gallery item" />
    </Container>
  );
}

GalleryItem.propTypes = {
  srcImage: PropTypes.string.isRequired,
};

export default GalleryItem;
