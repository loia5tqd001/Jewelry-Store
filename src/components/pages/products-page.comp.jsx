import React from 'react';

import ProductDropdown from '../molecules/product-dropdown.comp';
import SliderProductItem from '../molecules/slider-product-item.comp';
import Breadcrumb from '../atoms/breadcrumb.comp';
import Filters from '../organisms/products-page/filters.comp';

import routes from '../../utils/routes';

import {
  PageContainer,
  ImageContainer,
  MainSection,
  HeadingContainer,
  Heading,
  ProductsGrid,
  FilterContainer,
} from './products-page.styled';
import DATA from './products-page.data';

function ProductsPage() {
  return (
    <PageContainer>
      <Breadcrumb paths={[routes.home, routes.products]} />
      <ImageContainer>
        <img
          src="https://file.hstatic.net/1000327411/collection/landingpage_banner_rings.jpg"
          alt="Nhẫn"
        />
      </ImageContainer>
      <MainSection>
        <FilterContainer>
          <Filters />
        </FilterContainer>
        <HeadingContainer>
          <Heading>Sản phẩm nhẫn</Heading>
          <ProductDropdown />
        </HeadingContainer>
        <ProductsGrid>
          {DATA.slice(0, 10).map((item) => (
            <SliderProductItem key={item.productId} {...item} />
          ))}
        </ProductsGrid>
      </MainSection>
    </PageContainer>
  );
}

export default ProductsPage;
