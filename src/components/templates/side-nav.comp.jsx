import React, { useCallback } from 'react';
import routes, { Link, NavLink } from '../../utils/routes';
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsSideNavOpen } from '../../redux/navigation/actions';
import {
  selectIsSideNavOpen,
  selectBrands,
  selectProducts,
} from '../../redux/navigation/selectors';

import CollapsibleNavItem, { ToggleLink } from '../organisms/side-nav/collapsible-nav-item.comp';

import { Container, Overlay, CloseButton, Nav, NavList, NavItem, SubItem } from './side-nav.styled';

function SideNav() {
  const dispatch = useDispatch();
  const isSideNavOpen = useSelector(selectIsSideNavOpen);
  const brands = useSelector(selectBrands);
  const products = useSelector(selectProducts);

  const toglgeSideNav = useCallback(() => {
    dispatch(toggleIsSideNavOpen());
  }, [dispatch]);

  return (
    <Container isOpen={isSideNavOpen}>
      <Overlay onClick={toglgeSideNav} />
      <Nav>
        <CloseButton onClick={toglgeSideNav}>
          <ion-icon name="close-outline"></ion-icon>
        </CloseButton>
        <NavList>
          <NavItem>
            <ToggleLink type={NavLink} to={routes.home.path} exact>
              Trang chủ
            </ToggleLink>
          </NavItem>

          <CollapsibleNavItem heading="Nhãn hiệu" to={routes.brands.path}>
            {brands.map(({ id, display }) => (
              <SubItem key={id}>
                <ToggleLink type={Link} to={`${routes.brands.path}/${id}`}>
                  {display}
                </ToggleLink>
              </SubItem>
            ))}
          </CollapsibleNavItem>

          <CollapsibleNavItem heading="Sản phẩm" to={routes.products.path}>
            {products.map(({ id, display }) => (
              <SubItem key={id}>
                <ToggleLink type={Link} to={`${routes.products.path}/${id}`}>
                  {display}
                </ToggleLink>
              </SubItem>
            ))}
          </CollapsibleNavItem>

          <NavItem>
            <ToggleLink type={NavLink} to={routes.blog.path} exact>
              Blog
            </ToggleLink>
          </NavItem>

          <NavItem>
            <ToggleLink type={NavLink} to={routes.about.path} exact>
              Giới thiệu
            </ToggleLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default SideNav;
