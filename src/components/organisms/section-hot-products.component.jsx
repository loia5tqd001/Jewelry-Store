import React from 'react';
import PropTypes from 'prop-types';

import SliderProductItem from '../molecules/slider-product-item.component';

import { Link, ProductsContainer } from './section-hot-products.styles';
import DATA from './section-hot-products.data'

function SectionHotProducts(props) {
  return (
    <div>
      <h2>
        <Link>Sản phẩm bán chạy</Link>
      </h2>
      <ProductsContainer>
        {DATA.map((item, i) => (
          <SliderProductItem key={i} {...item} />
        ))}
      </ProductsContainer>
    </div>
  );
}

SectionHotProducts.propTypes = {};

export default SectionHotProducts;
