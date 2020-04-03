import React from 'react'
import {
  FilterPrice,
  FilterBrand,
  FilterProductType,
} from '../molecules/product-filters.comp';

function ProductsPage() {
  return (
    <div>
      <FilterPrice />
      <FilterBrand />
      <FilterProductType />
    </div>
  );
}

export default ProductsPage
