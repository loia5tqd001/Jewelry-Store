import React from 'react';

import routes, { StyledLink } from '../../../utils/routes';
import CollapsibleBlock from '../../molecules/collapsible-block.comp';
import EmailSubscribe from '../../molecules/email-subscribe.comp';

import { FooterTopContainer, Li, SubscribeParagraph } from './footer-top.styled';

const ListPolicy = () => (
  <ul>
    <Li><StyledLink to={routes.search.path}>Tìm kiếm</StyledLink></Li>
    <Li><StyledLink to={routes.about.path}>Giới thiệu</StyledLink></Li>
    <Li><StyledLink to={routes.returnPolicy.path}>Chính sách đổi trả</StyledLink></Li>
    <Li><StyledLink to={routes.privacyPolicy.path}>Chính sách bảo mật</StyledLink></Li>
    <Li><StyledLink to={routes.termsOfService.path}>Điều khoản dịch vụ</StyledLink></Li>
  </ul>
);

const ListCategory = () => (
  <ul>
    <Li><StyledLink to={routes.home.path}>Trang chủ</StyledLink></Li>
    <Li><StyledLink to="/">Nhãn hiệu</StyledLink></Li>
    <Li><StyledLink to="/">Sản phẩm</StyledLink></Li>
    <Li><StyledLink to={routes.blog.path}>Blog</StyledLink></Li>
    <Li><StyledLink to={routes.about.path}>Giới thiệu</StyledLink></Li>
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

function FooterTop() {
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

export default FooterTop;
