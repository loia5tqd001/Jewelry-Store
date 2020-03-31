import React from 'react';
import PropTypes from 'prop-types';
import routes from '../../../utils/routes';

import { useDispatch } from 'react-redux';
import { toggleIsSideNavOpen } from '../../../redux/navigation/actions';

import {
  HeaderTopBarContainer,
  StyledLink,
  TextCenter,
  TopBarRight,
  ResponsiveLabel,
  HamburgerIcon,
} from './header-top-bar.styled';

function HeaderTopBar({ isHeaderStuck }) {
  const dispatch = useDispatch();

  return (
    <HeaderTopBarContainer isHeaderStuck={isHeaderStuck}>
      <StyledLink to={routes.account.path}>
        <ion-icon name="person-outline"></ion-icon>
        <ResponsiveLabel>Tài Khoản</ResponsiveLabel>
      </StyledLink>

      <TextCenter>Đảm bảo 100% sự hài lòng</TextCenter>

      <TopBarRight>
        <StyledLink data-component="search" to={routes.search.path}>
          <ion-icon name="search-outline"></ion-icon>
          <ResponsiveLabel>Tìm kiếm</ResponsiveLabel>
        </StyledLink>

        <StyledLink to={routes.cart.path}>
          <ion-icon name="cart-outline"></ion-icon>
          <ResponsiveLabel>Giỏ hàng</ResponsiveLabel>
          <span>(1)</span>
        </StyledLink>
        <HamburgerIcon onClick={() => dispatch(toggleIsSideNavOpen())}>
          <ion-icon name="menu"></ion-icon>
        </HamburgerIcon>
      </TopBarRight>
    </HeaderTopBarContainer>
  );
}

HeaderTopBar.propTypes = {
  isHeaderStuck: PropTypes.bool.isRequired,
};

export default HeaderTopBar;
