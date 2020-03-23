import React from 'react';
import { Link } from 'react-router-dom';
import DATA from './section-banner.data';

import ImageSlowlyHover from '../../atoms/image-slowly-hover.component';

import { BannerContainer } from './section-banner.styles';

function SectionBanner() {
  return (
    <BannerContainer>
      {DATA.map(({ id, path, ...otherProps }) => (
        <Link to={path} key={id}>
          <ImageSlowlyHover {...otherProps} />
        </Link>
      ))}
    </BannerContainer>
  );
}

export default SectionBanner;
