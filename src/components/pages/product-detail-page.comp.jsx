import React, { useState, useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { ThemeContext } from 'styled-components';
import { useSelectProductById } from '../../redux/products/hooks';
import routes from '../../utils/routes';
import ReactMarkdown from 'react-markdown';
import { useParams, useHistory } from 'react-router-dom';

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
  SpecList,
  SpecItem,
  SpecName,
  TabsContainer,
  RedPrice,
  CrossedPrice,
} from './product-detail-page.styled';
import { info, productSpec } from './product-detail-page.data';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/actions';
import { formatVnd } from '../../utils/helpers';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext);
  const [counter, setCounter] = useState(1);
  const { productId } = useParams();
  const product = useSelectProductById(productId);
  const history = useHistory();

  return (
    <div>
      <Breadcrumb
        paths={[routes.home, routes.productDetail.display, 'White Gold Diamond Solitaire Ring']}
      />
      <Container>
        {/*Product slick*/}
        <ProductDetailsSlick images={product?.images} />

        {/*Product info*/}
        <ProductInfo>
          <ProductName>{product?.name}</ProductName>
          <ProductPrice>
            {product?.salePrice ? (
              <>
                <RedPrice>{formatVnd(product?.price)}</RedPrice>
                <CrossedPrice>{formatVnd(product?.salePrice)}</CrossedPrice>
              </>
            ) : (
              formatVnd(product?.price)
            )}
          </ProductPrice>
          <Counter
            min={1}
            value={counter}
            onIncrement={() => setCounter(counter + 1)}
            onDecrement={() => setCounter(counter - 1)}
          />
          <ButtonSliding
            bg_static={colors.blueDarker2}
            fg_static={colors.white}
            bg_sliding={colors.white}
            fg_sliding={colors.greyDark1}
            padding="1.5em"
            onClick={() => {
              dispatch(addProduct({ product, amount: counter }));
              history.push(routes.cart.path);
            }}
          >
            Thêm vào giỏ
          </ButtonSliding>
          <ReactMarkdown escapeHtml={false} source={info} />
        </ProductInfo>
      </Container>

      {/*Product's specification, rating, comments*/}
      <TabsContainer>
        <Tabs>
          <TabList>
            <Tab>Thông số</Tab>
            <Tab>Đánh giá</Tab>
            <Tab>Bình luận</Tab>
          </TabList>

          <TabPanel>
            <SpecList>
              {productSpec.map((spec) => (
                <SpecItem key={spec.name}>
                  <SpecName>{spec.name}: </SpecName>
                  <span>{spec.value}</span>
                </SpecItem>
              ))}
            </SpecList>
          </TabPanel>
          <TabPanel>
            <h2>Chưa có đánh giá nào</h2>
          </TabPanel>
          <TabPanel>
            <h2>Chưa có bình luận nào</h2>
          </TabPanel>
        </Tabs>
      </TabsContainer>

      <SliderRelatedProducts />
      <Spacer />
    </div>
  );
}

export default ProductDetailPage;
