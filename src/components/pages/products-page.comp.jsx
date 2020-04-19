import React from 'react';
import { useParams } from 'react-router-dom';
import collections from '../../mock-data/collections';
import products from '../../mock-data/products';

import ProductDropdown from '../molecules/product-dropdown.comp';
import Filters from '../organisms/products-page/filters.comp';
import ProductsGrid from '../organisms/products-page/products-grid.comp';
import PageHeader from '../organisms/products-page/page-header.comp';

import {
  PageContainer,
  MainSection,
  HeadingContainer,
  Heading,
  ProductsGridWrapper,
  FilterContainer,
} from './products-page.styled';

function ProductsPage() {
  const { collectionId } = useParams();
  const collection = collections.find((x) => x.id === collectionId);

  return (
    <PageContainer>
      <PageHeader collection={collection} />

      <MainSection>
        <FilterContainer>
          <Filters />
        </FilterContainer>

        <HeadingContainer>
          <Heading>
            {collection ? `Sản phẩm ${collection.collection.toLowerCase()}` : 'Tất cả sản phẩm'}
          </Heading>
          <ProductDropdown />
        </HeadingContainer>

        <ProductsGridWrapper>
          <ProductsGrid items={collection ? collection.items : products} />
        </ProductsGridWrapper>
      </MainSection>
    </PageContainer>
  );
}

export default ProductsPage;
