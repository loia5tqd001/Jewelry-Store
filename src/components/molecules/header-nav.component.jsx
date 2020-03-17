import React from 'react';
import PropTypes from 'prop-types';

import {
  MainNav,
  MainNavList,
  MainNavItem,
  MainNavLink,
  SubNavList,
  SubNavItem,
} from './header-nav.styles';

function HeaderNav(props) {
  return (
    <MainNav>
      <MainNavList>
        <MainNavItem>
          <MainNavLink>Trang chủ</MainNavLink>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink>
            Nhãn hiệu
            <ion-icon name="chevron-down-outline"></ion-icon>
          </MainNavLink>

          <SubNavList>
            <SubNavItem>
              <span>D'ORO</span>
            </SubNavItem>
            <SubNavItem>
              <span>PAVE CLASSICA</span>
            </SubNavItem>
            <SubNavItem>
              <span>TRIO</span>
            </SubNavItem>
            <SubNavItem>
              <span>PAVE ROSE</span>
            </SubNavItem>
            <SubNavItem>
              <span>BOUQUET</span>
            </SubNavItem>
            <SubNavItem>
              <span>DUO</span>
            </SubNavItem>
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink>
            Sản phẩm
            <ion-icon name="chevron-down-outline"></ion-icon>
          </MainNavLink>

          <SubNavList>
            <SubNavItem>
              <span>Nhẫn</span>
            </SubNavItem>
            <SubNavItem>
              <span>Hoa tai</span>
            </SubNavItem>
            <SubNavItem>
              <span>Dây chuyền</span>
            </SubNavItem>
            <SubNavItem>
              <span>Vòng tay</span>
            </SubNavItem>
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink>Blog</MainNavLink>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink>Giới thiệu</MainNavLink>
        </MainNavItem>
      </MainNavList>
    </MainNav>
  );
}

HeaderNav.propTypes = {};

export default HeaderNav;
