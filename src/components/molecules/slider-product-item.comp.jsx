import React from 'react';
import PropTypes from 'prop-types';
import routes, { Link } from '../../utils/routes';

import StyledLink from '../atoms/styled-link.comp';
import ImageDuoHover from '../atoms/image-duo-hover.comp';

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
  id,
  name,
  image,
  image2,
  price,
  sale,
}) {
  const to = `${routes.productDetail.path}/${id}`;

  return (
    <SliderItem>
      <ProductImage title={name}>
        <Link to={to}>
          {sale ? <SaleLabel>{`-${sale}%`}</SaleLabel> : ''}
          <ImageDuoHover srcImage={image} srcOnHover={image2} alt={name} />
        </Link>
      </ProductImage>

      <ProductDetail>
        <ProductName title={name}>
          <StyledLink to={to}>{name}</StyledLink>
        </ProductName>
        <ProductPrice>
          {sale ? (
            <>
              <ProPrice>{formatVnd(roundVnd(getSale(price, sale)))}</ProPrice>
              <ComparePrice>{formatVnd(roundVnd(price))}</ComparePrice>
            </>
          ) : (
            <span>{formatVnd(price)}</span>
          )}
        </ProductPrice>
      </ProductDetail>
    </SliderItem>
  );
}

SliderProductItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.number,
};

SliderProductItem.defaultProps = {
  sale: 0,
};

export default SliderProductItem;
