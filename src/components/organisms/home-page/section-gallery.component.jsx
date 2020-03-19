import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '../../atoms/gallery-item.component';

import { SectionContainer } from './section-gallery.styles';
import DATA from './section-gallery.data';

function SectionGallery(props) {
  return (
    <SectionContainer>
      {DATA.map((item, i) => (
        <GalleryItem key={i} {...item} />
      ))}
    </SectionContainer>
  );
}

SectionGallery.propTypes = {};

export default SectionGallery;
