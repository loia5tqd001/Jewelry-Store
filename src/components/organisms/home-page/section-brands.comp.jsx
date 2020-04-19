import React from 'react';
import routes, { Link } from '../../../utils/routes';
import brands from '../../../mock-data/brands';

import ImageSlowlyHover from '../../atoms/image-slowly-hover.comp';

import { SectionContainer } from './section-brands.styled';

function SectionBrands() {
  return (
    <SectionContainer>
      {brands.map((brand) => (
        <Link key={brand.id} to={`${routes.brands.path}/${brand.id}`}>
          <ImageSlowlyHover srcImage={brand.image} title={brand.brand} buttonTitle="Mua ngay" />
        </Link>
      ))}
    </SectionContainer>
  );
}

export default SectionBrands;
