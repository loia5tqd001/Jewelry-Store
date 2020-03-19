import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTopBarContainer, WrapIcon, TextCenter, TopBarRight } from './header-top-bar.styles';

function HeaderTopBar(props) {
  return (
    <HeaderTopBarContainer>
      <WrapIcon>
        <ion-icon name="person-outline"></ion-icon>
        <span>Tài Khoản</span>
      </WrapIcon>

      <TextCenter>Đảm bảo 100% sự hài lòng</TextCenter>

      <TopBarRight>
        <WrapIcon>
          <ion-icon name="search-outline"></ion-icon>
          <span>Tìm kiếm</span>
        </WrapIcon>

        <WrapIcon>
          <ion-icon name="cart-outline"></ion-icon>
          <span>Giỏ hàng</span>
          <span>(1)</span>
        </WrapIcon>
      </TopBarRight>
    </HeaderTopBarContainer>
  );
}

HeaderTopBar.propTypes = {};

export default HeaderTopBar;
