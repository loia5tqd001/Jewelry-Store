import React from 'react';
import DATA from './section-hot-products.data';

import routes, { StyledLink } from '../../../routes';
import SliderProductItem from '../../molecules/slider-product-item.component';

import { SectionContainer, ProductsContainer } from './section-hot-products.styles';

function SectionHotProducts() {
  return (
    <SectionContainer>
      <h2>
        <StyledLink to={routes.hotProducts.path}>Sản phẩm bán chạy</StyledLink>
      </h2>
      <ProductsContainer>
        {DATA.map((item) => (
          <SliderProductItem key={item.productId} {...item} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
}

export default SectionHotProducts;
