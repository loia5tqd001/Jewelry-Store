import React from 'react';

import routes, { Link } from '../../../routes';
import ImageSlowlyHover from '../../atoms/image-slowly-hover--';

import DATA from './section-brands.data';
import { SectionContainer } from './section-brands.styled';

function SectionBrands() {
  return (
    <SectionContainer>
      {DATA.map((item) => (
        <Link key={item.id} to={`${routes.brands.path}/${item.id}`}>
          <ImageSlowlyHover
            srcImage={item.srcImage}
            title={item.brand}
            buttonTitle="Mua ngay"
          />
        </Link>
      ))}
    </SectionContainer>
  );
}

export default SectionBrands;
