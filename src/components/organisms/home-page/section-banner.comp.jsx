import React from 'react';
import { Link } from 'react-router-dom';

import ImageSlowlyHover from '../../atoms/image-slowly-hover.comp';

import DATA from './section-banner.data';
import { BannerContainer } from './section-banner.styled';

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
