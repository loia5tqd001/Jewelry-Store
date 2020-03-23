import React from 'react';
import routes from '../../../routes';
import { brands, products } from './header-nav.data';

import {
  MainNav,
  MainNavList,
  MainNavItem,
  MainNavLink,
  SubNavList,
  SubNavItem,
  SubNavLink,
} from './header-nav.styles';

const StyledMainNavLink = (props) => <MainNavLink exact activeClassName="active" {...props} />;

function HeaderNav(props) {
  return (
    <MainNav>
      <MainNavList>
        <MainNavItem>
          <StyledMainNavLink title="Trang chủ" to={routes.home.path}>
            Trang chủ
          </StyledMainNavLink>
        </MainNavItem>

        <MainNavItem>
          <StyledMainNavLink title="Nhãn hiệu" to={routes.brands.path}>
            Nhãn hiệu
            <ion-icon name="chevron-down-outline"></ion-icon>
          </StyledMainNavLink>

          <SubNavList>
            {brands.map((brand) => (
              <SubNavItem key={brand.id}>
                <SubNavLink to={`${routes.brands.path}/${brand.id}`}>{brand.display}</SubNavLink>
              </SubNavItem>
            ))}
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <StyledMainNavLink title="Sản phẩm" to={routes.products.path}>
            Sản phẩm
            <ion-icon name="chevron-down-outline"></ion-icon>
          </StyledMainNavLink>

          <SubNavList>
            {products.map((product) => (
              <SubNavItem key={product.id}>
                <SubNavLink to={`${routes.products.path}/${product.id}`}>
                  {product.display}
                </SubNavLink>
              </SubNavItem>
            ))}
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <StyledMainNavLink title="Blog" to={routes.blog.path}>
            Blog
          </StyledMainNavLink>
        </MainNavItem>

        <MainNavItem>
          <StyledMainNavLink title="Giới thiệu" to={routes.about.path}>
            Giới thiệu
          </StyledMainNavLink>
        </MainNavItem>
      </MainNavList>
    </MainNav>
  );
}

export default HeaderNav;
