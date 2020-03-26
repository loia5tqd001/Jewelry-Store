import styled, { css } from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  width: 32rem;
  background: ${(props) => props.theme.styles.background};
  box-shadow: -0.5rem 0 0.5rem #8881;
  transition: transform ${(props) => props.theme.styles.transSlow5};

  a:active {
    color: ${(props) => props.theme.styles.colorPrimaryDarker3};
  }

  ${(props) => !props.isOpen && css`
    transform: translateX(100%);
  `}
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

export const Nav = styled.nav`
  position: absolute;
  left: 4rem;
  right: 4rem;
  top: 6rem;
  font-size: 2.2rem;
  font-weight: ${(props) => props.theme.fw.normal};
  opacity: 0.9;
`;

export const NavItem = styled.li`
  margin: 1rem auto 0.5rem;

  .ReactCollapse--collapse {
    transition: height ${(props) => props.theme.styles.transSlow5};
  }
`;

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ion-icon.is-open {
    transform: rotate(180deg);
  }
`;

export const SubList = styled.ul`
  font-size: 0.9em;
  margin-left: 2rem;
  font-weight: ${(props) => props.theme.fw.light};
`;

export const SubItem = styled.li`
  margin: 0.5rem auto;
`;
