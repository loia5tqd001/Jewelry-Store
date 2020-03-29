import React from 'react';
import PropTypes from 'prop-types';
import routes, { Link } from '../../utils/routes';

import StyledLink from '../atoms/styled-link--';
import ImageDuoHover from '../atoms/image-duo-hover--';

import { formatVnd, roundVnd } from '../../utils/helpers';
import { getSale } from './slider-product-item.utils';

import {
  SliderItem,
  ProductImage,
  SaleLabel,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProPrice,
  ComparePrice,
} from './slider-product-item.styled';

function SliderProductItem({
  productId,
  productName,
  srcImage,
  srcOnHover,
  originalPrice,
  productSale,
}) {
  const to = `${routes.products.path}/${productId}`;

  return (
    <SliderItem>
      <ProductImage title={productName}>
        <Link to={to}>
          {productSale ? <SaleLabel>{`-${productSale}%`}</SaleLabel> : ''}
          <ImageDuoHover srcImage={srcImage} srcOnHover={srcOnHover} alt={productName} />
        </Link>
      </ProductImage>

      <ProductDetail>
        <ProductName title={productName}>
          <StyledLink to={to}>{productName}</StyledLink>
        </ProductName>
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
  productId: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  productName: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  srcOnHover: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  productSale: PropTypes.number,
};

SliderProductItem.defaultProps = {
  productSale: 0,
};

export default SliderProductItem;
