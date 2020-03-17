import React from 'react';
import PropTypes from 'prop-types';

import ImageSlowlyHover from '../atoms/image-slowly-hover.component';

import { SectionContainer } from './section-brands.styles';
import DATA from './section-brands.data';

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
