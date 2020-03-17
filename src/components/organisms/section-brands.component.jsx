import React from 'react';
import PropTypes from 'prop-types';

import ImageSlowlyHover from '../atoms/image-slowly-hover.component';

import { SectionContainer } from './section-brands.styles';

const DATA = [
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img1_d5d68be86c464ae6a936d3c64f3b1a02.jpg',
    brand: "D'ORO",
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img2_854c619e78cf4550bb8af5cbc9ff3b1f.jpg',
    brand: 'PAVE CLASSICA',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img3_2ad5cec29db6418ebdf161797f25c7f0.jpg',
    brand: 'TRIO',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img4_13321e97167941a8bc2d400d0aee0afc.jpg',
    brand: 'PAVE ROSE',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img5_1d21cc86c3404ec38a120db498e2e0d4.jpg',
    brand: 'BOUQUET',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/homepage-img6_f5e4f7595e23402d9c0e7e7ae05d89c9.jpg',
    brand: 'DUO',
  },
];

function SectionBrands(props) {
  return (
    <SectionContainer>
      {DATA.map((item, i) => (
        <ImageSlowlyHover
          key={i}
          srcImage={item.srcImage}
          title={item.brand}
          buttonTitle="Mua ngay"
        />
      ))}
    </SectionContainer>
  );
}

SectionBrands.propTypes = {};

export default SectionBrands;
