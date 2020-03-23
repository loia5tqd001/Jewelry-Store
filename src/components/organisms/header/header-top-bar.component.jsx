import React from 'react';
import routes from '../../../routes';

import {
  HeaderTopBarContainer,
  StyledLink,
  TextCenter,
  TopBarRight,
} from './header-top-bar.styles';

function HeaderTopBar(props) {
  return (
    <HeaderTopBarContainer>
      <StyledLink to={routes.account.path}>
        <ion-icon name="person-outline"></ion-icon>
        <span>Tài Khoản</span>
      </StyledLink>

      <TextCenter>Đảm bảo 100% sự hài lòng</TextCenter>

      <TopBarRight>
        <StyledLink to={routes.search.path}>
          <ion-icon name="search-outline"></ion-icon>
          <span>Tìm kiếm</span>
        </StyledLink>

        <StyledLink to={routes.cart.path}>
          <ion-icon name="cart-outline"></ion-icon>
          <span>Giỏ hàng</span>
          <span>(1)</span>
        </StyledLink>
      </TopBarRight>
    </HeaderTopBarContainer>
  );
}

export default HeaderTopBar;
