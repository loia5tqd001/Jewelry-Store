import React from 'react';

import GalleryItem from '../../atoms/gallery-item.comp';

import DATA from './section-gallery.data';
import { SectionContainer } from './section-gallery.styled';

function SectionGallery() {
  return (
    <SectionContainer>
      {DATA.map((item, i) => (
        <GalleryItem key={i} {...item} />
      ))}
    </SectionContainer>
  );
}

export default SectionGallery;
