import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  right: 0;
  width: 32rem;
  height: 100%;
  background: ${(props) => props.theme.styles.background};
  box-shadow: -0.5rem 0 0.5rem #8881;
  transition: transform ${(props) => props.theme.styles.transSlow5};
  transform: translateX(100%);

  a:active {
    color: ${(props) => props.theme.styles.colorPrimaryDarker3};
  }
`;

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;

  ${(props) => props.isOpen && css`
    width: 100%;

    ${Nav} {
      transform: translateX(0);
    }
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.overlay};
`;

export const NavList = styled.ul`
  position: absolute;
  left: 4rem;
  right: 4rem;
  top: 6rem;
  font-size: 2.2rem;
  font-weight: ${(props) => props.theme.fw.normal};
  opacity: 0.9;
`;

export const CloseButton = styled.button`
  ${(props) => props.theme.mixins.transparentizeButton};
  font-size: 4rem;
  position: absolute;
  top: 2rem;
  right: 3rem;
  padding: 0;
  opacity: 0.75;
`;

export const NavItem = styled.li`
  margin: 1rem auto 0.5rem;

  .ReactCollapse--collapse {
    transition: height ${(props) => props.theme.styles.transSlow5};
  }
`;

export const SubItem = styled.li`
  margin: 0.5rem auto;
`;
