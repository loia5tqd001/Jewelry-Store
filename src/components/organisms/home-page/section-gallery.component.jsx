import React from 'react';
import DATA from './section-gallery.data';

import GalleryItem from '../../atoms/gallery-item.component';

import { SectionContainer } from './section-gallery.styles';

function SectionGallery(props) {
  return (
    <SectionContainer>
      {DATA.map((item, i) => (
        <GalleryItem key={i} {...item} />
      ))}
    </SectionContainer>
  );
}

export default SectionGallery;
