import React from 'react';
import PropTypes from 'prop-types';

import ImageSlowlyHover from '../../atoms/image-slowly-hover.component';

import { BannerContainer } from './section-banner.styles';
import DATA from './section-banner.data';

function SectionBanner(props) {
  return (
    <BannerContainer>
      {DATA.map((item, i) => (
        <ImageSlowlyHover key={i} {...item} />
      ))}
    </BannerContainer>
  );
}

SectionBanner.propTypes = {};

export default SectionBanner;
