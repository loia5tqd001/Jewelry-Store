import React from 'react';
import PropTypes from 'prop-types';

import CollapsibleBlock from '../../atoms/collapsible-block.component';
import StyledLink from '../../atoms/styled-link.component';
import EmailSubscribe from '../../molecules/email-subscribe.component';

import { FooterTopContainer, Li, SubscribeParagraph } from './footer-top.styles';

const ListPolicy = () => (
  <ul>
    <Li> <StyledLink>Tìm kiếm</StyledLink> </Li>
    <Li> <StyledLink>Giới thiệu</StyledLink> </Li>
    <Li> <StyledLink>Chính sách đổi trả</StyledLink> </Li>
    <Li> <StyledLink>Chính sách bảo mật</StyledLink> </Li>
    <Li> <StyledLink>Điều khoản dịch vụ</StyledLink> </Li>
  </ul>
);

const ListCategory = () => (
  <ul>
    <Li> <StyledLink>Trang chủ</StyledLink> </Li>
    <Li> <StyledLink>Nhãn hiệu</StyledLink> </Li>
    <Li> <StyledLink>Sản phẩm</StyledLink> </Li>
    <Li> <StyledLink>Blog</StyledLink> </Li>
    <Li> <StyledLink>Giới thiệu</StyledLink> </Li>
  </ul>
);

const FacebookEmbeded = () => (
  <div
    className="fb-page"
    data-href="https://www.facebook.com/107106914025010"
    data-tabs="timeline"
    data-width=""
    data-height="120"
    data-small-header="false"
    data-adapt-container-width="true"
    data-hide-cover="false"
    data-show-facepile="true"
  >
    <blockquote cite="https://www.facebook.com/107106914025010" className="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/107106914025010">Frontend Jr</a>
    </blockquote>
  </div>
);

function FooterTop(props) {
  return (
    <FooterTopContainer>
      <CollapsibleBlock heading="Pháp lý & câu hỏi">
        <ListPolicy />
      </CollapsibleBlock>

      <CollapsibleBlock heading="Danh mục">
        <ListCategory />
      </CollapsibleBlock>

      <CollapsibleBlock heading="Đăng ký nhận tin">
        <SubscribeParagraph>
          Đăng ký ngay để nhận thông tin khuyến mãi, các chương trình quà tặng từ shop.
        </SubscribeParagraph>
        <EmailSubscribe />
      </CollapsibleBlock>

      <CollapsibleBlock heading="Fanpage">
        <FacebookEmbeded />
      </CollapsibleBlock>
    </FooterTopContainer>
  );
}

FooterTop.propTypes = {};

export default FooterTop;
