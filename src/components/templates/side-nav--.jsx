import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import { useSelector, useDispatch } from 'react-redux';
import { toggleIsSideNavOpen } from '../../redux/navigation/actions';
import {
  selectIsSideNavOpen,
  selectBrands,
  selectProducts,
} from '../../redux/navigation/selectors';

import routes, { Link, NavLink } from '../../routes';

import { Container, CloseButton, Nav, NavItem, Trigger, SubList, SubItem } from './side-nav.styled';

const CollapsibleNavItem = ({ heading, to, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavItem onClick={() => setIsOpen(!isOpen)}>
      <Trigger>
        <NavLink to={to} exact>
          {heading}
        </NavLink>
        <ion-icon className={isOpen && 'is-open'} name="chevron-down-outline" />
      </Trigger>
      <Collapse isOpened={isOpen}>
        <SubList>{children}</SubList>
      </Collapse>
    </NavItem>
  );
};

function SideNav() {
  const dispatch = useDispatch();
  const isSideNavOpen = useSelector(selectIsSideNavOpen);
  const brands = useSelector(selectBrands);
  const products = useSelector(selectProducts);

  return (
    <Container isOpen={isSideNavOpen}>
      <CloseButton onClick={() => dispatch(toggleIsSideNavOpen())}>
        <ion-icon name="close-outline"></ion-icon>
      </CloseButton>
      <Nav>
        <ul>
          <NavItem>
            <NavLink to={routes.home.path} exact>
              Trang chủ
            </NavLink>
          </NavItem>

          <CollapsibleNavItem heading="Nhãn hiệu" to={routes.brands.path}>
            {brands.map(({ id, display }) => (
              <SubItem key={id}>
                <Link to={`${routes.brands.path}/${id}`}>{display}</Link>
              </SubItem>
            ))}
          </CollapsibleNavItem>

          <CollapsibleNavItem heading="Sản phẩm" to={routes.products.path}>
            {products.map(({ id, display }) => (
              <SubItem key={id}>
                <Link to={`${routes.products.path}/${id}`}>{display}</Link>
              </SubItem>
            ))}
          </CollapsibleNavItem>

          <NavItem>
            <NavLink to={routes.blog.path} exact>
              Blog
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to={routes.about.path} exact>
              Giới thiệu
            </NavLink>
          </NavItem>
        </ul>
      </Nav>
    </Container>
  );
}

export default SideNav;