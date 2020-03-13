import React from 'react';
import PropTypes from 'prop-types';

import { ImageContainer, ImageStatic, ImageOnHover } from './image-duo-hover.styles';

function ImageDuoHover({ srcImage, srcOnHover, alt }) {
  return (
    <ImageContainer>
      <ImageStatic src={srcImage} alt={alt} />
      <ImageOnHover src={srcOnHover} alt={alt} />
    </ImageContainer>
  );
}

ImageDuoHover.propTypes = {
  srcImage: PropTypes.string.isRequired,
  srcOnHover: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageDuoHover;
