import React from 'react';
import Collapsible from 'react-collapsible';

import { brands, products } from './side-nav.data';
import routes, { Link, NavLink } from '../../routes';

import { Container, CloseButton, Nav, NavItem, SubList, SubItem } from './side-nav.styles';

const CollapsibleTrigger = ({ content, to }) => (
  <>
    <NavLink to={to} exact>
      {content}
    </NavLink>
    <ion-icon name="chevron-down-outline"></ion-icon>
  </>
);

const CollapsibleNavItem = (props) => (
  <Collapsible
    openedClassName="open"
    transitionTime={350}
    easing="ease-in"
    {...props}
  />
);

function SideNav() {
  return (
    <Container>
      <CloseButton>
        <ion-icon name="close-outline"></ion-icon>
      </CloseButton>
      <Nav>
        <ul>
          <NavItem>
            <NavLink to={routes.home.path} exact>
              Trang chủ
            </NavLink>
          </NavItem>

          <NavItem>
            <CollapsibleNavItem
              trigger={<CollapsibleTrigger content="Nhãn hiệu" to={routes.brands.path} />}
            >
              <SubList>
                {brands.map(({ id, display }) => (
                  <SubItem key={id}>
                    <Link to={`${routes.products.path}/${id}`}>{display}</Link>
                  </SubItem>
                ))}
              </SubList>
            </CollapsibleNavItem>
          </NavItem>

          <NavItem>
            <CollapsibleNavItem
              trigger={<CollapsibleTrigger content="Sản phẩm" to={routes.products.path} />}
            >
              <SubList>
                {products.map(({ id, display }) => (
                  <SubItem key={id}>
                    <Link to={`${routes.products.path}/${id}`}>{display}</Link>
                  </SubItem>
                ))}
              </SubList>
            </CollapsibleNavItem>
          </NavItem>

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
