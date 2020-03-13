import React from 'react';
import PropTypes from 'prop-types';

import { formatVnd, roundVnd } from '../../utils';
import { getSale } from './slider-product-item.utils';

import ImageDuoHover from '../atoms/image-duo-hover.component';

import {
  ProductImage,
  SaleLabel,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProPrice,
  ComparePrice,
} from './slider-product-item.styles';

function SliderProductItem({ productName, srcImage, srcOnHover, originalPrice, productSale }) {
  productName = 'Yellow Gold Multi Sapphire & Diamond Ring';
  srcImage = 'http://product.hstatic.net/1000327411/product/sp07-2_grande.jpg';
  srcOnHover = 'http://product.hstatic.net/1000327411/product/sp07-1_grande.jpg';
  productSale = 13;
  originalPrice = 1500000;

  return (
    <div style={{ width: '20vw' }}>
      <ProductImage title={productName}>
        <SaleLabel>{`-${productSale}%`}</SaleLabel>
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
    </div>
  );
}

SliderProductItem.propTypes = {
  productName: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  srcOnHover: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  productSale: PropTypes.number.isRequired,
};

export default SliderProductItem;
