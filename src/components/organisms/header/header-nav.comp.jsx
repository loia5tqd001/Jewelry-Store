import React from 'react';
import PropTypes from 'prop-types';
import routes from '../../../utils/routes';
import brands from '../../../mock-data/brands';
import collections from '../../../mock-data/collections';

import {
  MainNav,
  MainNavList,
  MainNavItem,
  MainNavLink,
  SubNavList,
  SubNavItem,
  SubNavLink,
} from './header-nav.styled';

function HeaderNav({ isHeaderStuck }) {
  return (
    <MainNav isHeaderStuck={isHeaderStuck}>
      <MainNavList>
        <MainNavItem>
          <MainNavLink title="Trang chủ" to={routes.home.path} exact>
            Trang chủ
          </MainNavLink>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Nhãn hiệu" to={routes.brands.path} exact>
            Nhãn hiệu
            <ion-icon name="chevron-down-outline"/>
          </MainNavLink>

          <SubNavList>
            {brands.map((brand) => (
              <SubNavItem key={brand.id}>
                <SubNavLink to={`${routes.brands.path}/${brand.id}`}>{brand.brand}</SubNavLink>
              </SubNavItem>
            ))}
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Sản phẩm" to={routes.products.path} exact>
            Sản phẩm
            <ion-icon name="chevron-down-outline"/>
          </MainNavLink>

          <SubNavList>
            {collections.map((collection) => (
              <SubNavItem key={collection.id}>
                <SubNavLink to={`${routes.products.path}/${collection.id}`}>
                  {collection.collection}
                </SubNavLink>
              </SubNavItem>
            ))}
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Blog" to={routes.blog.path} exact>
            Blog
          </MainNavLink>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Giới thiệu" to={routes.about.path} exact>
            Giới thiệu
          </MainNavLink>
        </MainNavItem>
      </MainNavList>
    </MainNav>
  );
}

HeaderNav.propTypes = {
  isHeaderStuck: PropTypes.bool.isRequired,
};

export default HeaderNav;
