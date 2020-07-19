import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import routes from '../../utils/routes';
import ReactMarkdown from 'react-markdown';

import Breadcrumb from '../atoms/breadcrumb.comp';
import Counter from '../atoms/counter.comp';
import ButtonSliding from '../atoms/button-sliding.comp';
import ProductDetailsSlick from '../organisms/product-details-page/product-details-slick.comp';
import SliderRelatedProducts from '../organisms/product-details-page/slider-related-products.comp';
import RatingCommentTabs from '../organisms/product-details-page/rating-comment-tabs.comp';

import {
  Container,
  ProductInfo,
  ProductName,
  ProductPrice,
  Spacer,
  SpecList,
  SpecItem,
  SpecName,
  SpecContainer,
  RatingContainer,
} from './product-detail-page.styled';
import { info, images, productSpec } from './product-detail-page.data';

function ProductDetailPage() {
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <Breadcrumb
        paths={[routes.home, routes.productDetail.display, 'White Gold Diamond Solitaire Ring']}
      />
      <Container>
        {/*Product slick*/}
        <ProductDetailsSlick images={images}/>
        {/*Product info*/}
        <ProductInfo>
          <ProductName>Diamond Ring</ProductName>
          <ProductPrice>1,400,000₫</ProductPrice>
          <Counter min={1} value={1} onIncrement={() => null} onDecrement={() => null}/>
          <ButtonSliding
            bg_static={colors.blueDarker2}
            fg_static={colors.white}
            bg_sliding={colors.white}
            fg_sliding={colors.greyDark1}
            padding="1.5em"
          >
            Thêm vào giỏ
          </ButtonSliding>
          <ReactMarkdown escapeHtml={false} source={info}/>
        </ProductInfo>
      </Container>

      {/*Product's specification*/}
      <SpecContainer>
        <h2>Thông số</h2>
        <SpecList>
          {productSpec.map((spec) => (
            <SpecItem key={spec.name}>
              <SpecName>{spec.name}: </SpecName>
              <span>{spec.value}</span>
            </SpecItem>
          ))}
        </SpecList>
      </SpecContainer>

      {/*Product's rating, comments*/}
      <RatingContainer>
        <RatingCommentTabs/>
      </RatingContainer>

      <SliderRelatedProducts/>
      <Spacer/>
    </div>
  );
}

export default ProductDetailPage;
