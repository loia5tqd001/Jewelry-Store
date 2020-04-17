import React from 'react';
import routes from '../../utils/routes';

import ProductDropdown from '../molecules/product-dropdown.comp';
import Breadcrumb from '../atoms/breadcrumb.comp';
import Filters from '../organisms/products-page/filters.comp';
import ProductsGrid from '../organisms/products-page/products-grid.comp';

import {
  PageContainer,
  ImageContainer,
  MainSection,
  HeadingContainer,
  Heading,
  ProductsGridWrapper,
  FilterContainer,
} from './products-page.styled';

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

        <ProductsGridWrapper>
          <ProductsGrid />
        </ProductsGridWrapper>
      </MainSection>
    </PageContainer>
  );
}

export default ProductsPage;
