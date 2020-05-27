import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import routes from '../../utils/routes';
import ReactMarkdown from 'react-markdown';

import Breadcrumb from '../atoms/breadcrumb.comp';
import Counter from '../atoms/counter.comp';
import ButtonSliding from '../atoms/button-sliding.comp';
import ProductDetailsSlick from '../organisms/product-details-page/product-details-slick.comp';
import SliderRelatedProducts from '../organisms/product-details-page/slider-related-products.comp';

import {
  Container,
  ProductInfo,
  ProductName,
  ProductPrice,
  Spacer,
} from './product-detail-page.styled';

const images = [
  'https://product.hstatic.net/1000327411/product/sp19-1_master.jpg',
  'https://product.hstatic.net/1000327411/product/sp19-2_master.jpg',
  'https://product.hstatic.net/1000327411/product/sp19-3_master.jpg',
  'https://product.hstatic.net/1000327411/product/sp19-4_master.jpg',
  'https://product.hstatic.net/1000327411/product/sp19-5_master.jpg',
  'https://product.hstatic.net/1000327411/product/sp08-1_grande.jpg',
];

const info = `
  __Mô tả__
  
  Metal: 14K Gold

  Metal Color: Rose/Yellow/White

  Stones:

    - Round Ruby 0.99

    - Round Blue Sapphire 0.99

    - Round Emerald 0.99

    - Oval Ruby 1.37

    - Oval Emerald 1.02

    - Oval Blue Sapphire 1.37
  `;
function ProductDetailPage() {
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <Breadcrumb
        paths={[routes.home, routes.productDetail.display, 'White Gold Diamond Solitaire Ring']}
      />
      <Container>
        <ProductDetailsSlick images={images} />
        <ProductInfo>
          <ProductName>Diamond Ring</ProductName>
          <ProductPrice>1,400,000₫</ProductPrice>
          <Counter min={1} value={1} onIncrement={() => null} onDecrement={() => null} />
          <ButtonSliding
            bg_static={colors.blueDarker2}
            fg_static={colors.white}
            bg_sliding={colors.white}
            fg_sliding={colors.greyDark1}
            padding="1.5em"
          >
            Thêm vào giỏ
          </ButtonSliding>
          <ReactMarkdown escapeHtml={false} source={info} />
        </ProductInfo>
      </Container>
      <SliderRelatedProducts />
      <Spacer />
    </div>
  );
}

export default ProductDetailPage;
