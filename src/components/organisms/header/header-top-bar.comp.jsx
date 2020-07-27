import React from 'react';
import PropTypes from 'prop-types';
import { selectAmountProductInCart } from '../../../redux/cart/selectors';
import routes from '../../../utils/routes';

import { useDispatch, useSelector } from 'react-redux';
import { toggleIsSideNavOpen } from '../../../redux/navigation/actions';

import {
  HeaderTopBarContainer,
  StyledLink,
  TextCenter,
  TopBarRight,
  ResponsiveLabel,
  HamburgerIcon,
} from './header-top-bar.styled';
import { selectCurrentUser } from '../../../redux/user/selectors';

function HeaderTopBar({ isHeaderStuck }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectAmountProductInCart);

  return (
    <HeaderTopBarContainer isHeaderStuck={isHeaderStuck}>
      <StyledLink to={routes.account.path}>
        <ion-icon name="person-outline"/>
        <ResponsiveLabel>
          {currentUser?.displayName || 'Tài Khoản'}
        </ResponsiveLabel>
      </StyledLink>

      <TextCenter>Đảm bảo 100% sự hài lòng</TextCenter>

      <TopBarRight>
        <StyledLink data-component="search" to={routes.search.path}>
          <ion-icon name="search-outline"/>
          <ResponsiveLabel>Tìm kiếm</ResponsiveLabel>
        </StyledLink>

        <StyledLink to={routes.cart.path}>
          <ion-icon name="cart-outline"/>
          <ResponsiveLabel>Giỏ hàng</ResponsiveLabel>
          <span>({cartCount})</span>
        </StyledLink>
        <HamburgerIcon onClick={() => dispatch(toggleIsSideNavOpen())}>
          <ion-icon name="menu"/>
        </HamburgerIcon>
      </TopBarRight>
    </HeaderTopBarContainer>
  );
}

HeaderTopBar.propTypes = {
  isHeaderStuck: PropTypes.bool.isRequired,
};

export default HeaderTopBar;
