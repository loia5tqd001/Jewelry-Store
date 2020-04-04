import React from 'react';

import { FilterPrice, FilterBrand } from '../molecules/product-filters.comp';
import ProductDropdown from '../molecules/product-dropdown.comp';
import SliderProductItem from '../molecules/slider-product-item.comp';

import {
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
    <section>
      <ImageContainer>
        <img
          src="https://file.hstatic.net/1000327411/collection/landingpage_banner_rings.jpg"
          alt="Nhẫn"
        />
      </ImageContainer>
      <MainSection>
        <FilterContainer>
          <FilterBrand />
          <FilterPrice />
        </FilterContainer>
        <main>
          <HeadingContainer>
            <Heading>Sản phẩm nhẫn</Heading>
            <ProductDropdown />
          </HeadingContainer>
          <ProductsGrid>
            {DATA.slice(0, 10).map((item) => (
              <SliderProductItem key={item.productId} {...item} />
            ))}
          </ProductsGrid>
        </main>
      </MainSection>
    </section>
  );
}

export default ProductsPage;
