import React from 'react';
import PropTypes from 'prop-types';

import { formatVnd, roundVnd } from '../../utils';
import { getSale } from './slider-product-item.utils';

import ImageDuoHover from '../atoms/image-duo-hover.component';

import {
  SliderItem,
  ProductImage,
  SaleLabel,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProPrice,
  ComparePrice,
} from './slider-product-item.styles';

function SliderProductItem({ productName, srcImage, srcOnHover, originalPrice, productSale }) {
  return (
    <SliderItem>
      <ProductImage title={productName}>
        {productSale ? <SaleLabel>{`-${productSale}%`}</SaleLabel> : ''}
        <ImageDuoHover srcImage={srcImage} srcOnHover={srcOnHover} alt={productName} />
      </ProductImage>

      <ProductDetail>
        <ProductName title={productName}>{productName}</ProductName>
        <ProductPrice>
          {productSale ? (
            <>
              <ProPrice>{formatVnd(roundVnd(getSale(originalPrice, productSale)))}</ProPrice>
              <ComparePrice>{formatVnd(roundVnd(originalPrice))}</ComparePrice>
            </>
          ) : (
            <span>{formatVnd(originalPrice)}</span>
          )}
        </ProductPrice>
      </ProductDetail>
    </SliderItem>
  );
}

SliderProductItem.propTypes = {
  productName: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  srcOnHover: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  productSale: PropTypes.number,
};

export default SliderProductItem;
