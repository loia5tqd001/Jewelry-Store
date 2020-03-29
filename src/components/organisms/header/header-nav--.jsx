import React from 'react';
import routes from '../../../utils/routes';

import { useSelector } from 'react-redux';
import { selectBrands, selectProducts } from '../../../redux/navigation/selectors';

import {
  MainNav,
  MainNavList,
  MainNavItem,
  MainNavLink,
  SubNavList,
  SubNavItem,
  SubNavLink,
} from './header-nav.styled';

function HeaderNav() {
  const brands = useSelector(selectBrands);
  const products = useSelector(selectProducts);

  return (
    <MainNav>
      <MainNavList>
        <MainNavItem>
          <MainNavLink title="Trang chủ" to={routes.home.path} exact>
            Trang chủ
          </MainNavLink>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Nhãn hiệu" to={routes.brands.path} exact>
            Nhãn hiệu
            <ion-icon name="chevron-down-outline"></ion-icon>
          </MainNavLink>

          <SubNavList>
            {brands.map((brand) => (
              <SubNavItem key={brand.id}>
                <SubNavLink to={`${routes.brands.path}/${brand.id}`}>{brand.display}</SubNavLink>
              </SubNavItem>
            ))}
          </SubNavList>
        </MainNavItem>

        <MainNavItem>
          <MainNavLink title="Sản phẩm" to={routes.products.path} exact>
            Sản phẩm
            <ion-icon name="chevron-down-outline"></ion-icon>
          </MainNavLink>

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

export default HeaderNav;
