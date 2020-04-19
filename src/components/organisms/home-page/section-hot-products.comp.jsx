import React from 'react';
import routes, { StyledLink } from '../../../utils/routes';
import hotProducts from '../../../mock-data/hot-products';

import SliderProductItem from '../../molecules/slider-product-item.comp';

import { SectionContainer, ProductsContainer } from './section-hot-products.styled';

function SectionHotProducts() {
  return (
    <SectionContainer>
      <h2>
        <StyledLink to={routes.hotProducts.path}>Sản phẩm bán chạy</StyledLink>
      </h2>
      <ProductsContainer>
        {hotProducts.slice(0, 10).map((item) => (
          <SliderProductItem key={item.id} {...item} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
}

export default SectionHotProducts;
