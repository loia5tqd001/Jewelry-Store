import React, { useCallback } from 'react';
import routes, { Link, NavLink } from '../../utils/routes';
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsSideNavOpen } from '../../redux/navigation/actions';
import { selectIsSideNavOpen } from '../../redux/navigation/selectors';
import brands from '../../mock-data/brands';
import collections from '../../mock-data/collections';

import CollapsibleNavItem, { ToggleLink } from '../organisms/side-nav/collapsible-nav-item.comp';

import { Container, Overlay, CloseButton, Nav, NavList, NavItem, SubItem } from './side-nav.styled';

function SideNav() {
  const dispatch = useDispatch();
  const isSideNavOpen = useSelector(selectIsSideNavOpen);

  const toggleSideNav = useCallback(() => {
    dispatch(toggleIsSideNavOpen());
  }, [dispatch]);

  return (
    <Container isOpen={isSideNavOpen}>
      <Overlay onClick={toggleSideNav} />
      <Nav>
        <CloseButton onClick={toggleSideNav}>
          <ion-icon name="close-outline"/>
        </CloseButton>
        <NavList>
          <NavItem>
            <ToggleLink type={NavLink} to={routes.home.path} exact>
              Trang chủ
            </ToggleLink>
          </NavItem>

          <CollapsibleNavItem heading="Nhãn hiệu" to={routes.brands.path}>
            {brands.map(({ id, brand }) => (
              <SubItem key={id}>
                <ToggleLink type={Link} to={`${routes.brands.path}/${id}`}>
                  {brand}
                </ToggleLink>
              </SubItem>
            ))}
          </CollapsibleNavItem>

          <CollapsibleNavItem heading="Sản phẩm" to={routes.products.path}>
            {collections.map(({ id, collection }) => (
              <SubItem key={id}>
                <ToggleLink type={Link} to={`${routes.products.path}/${id}`}>
                  {collection}
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
