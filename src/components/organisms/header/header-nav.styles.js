import styled from 'styled-components';

export const SubNavList = styled.ul`
  text-transform: initial;
  color: initial;
  font-weight: ${(props) => props.theme.fw.thin};
  background: ${(props) => props.theme.styles.background};

  transition: ${(props) => props.theme.styles.transSlow1};
  transform: scaleY(0);
  transform-origin: top;

  position: absolute;
  z-index: 999;
  top: 100%;
  left: 0;
  width: max-content;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  border-top: 0.2rem solid ${(props) => props.theme.colors.greyDark2};
  margin-top: -0.2rem;
  padding-top: 0.2rem;
`;

export const SubNavItem = styled.li`
  padding: 0.5rem 2rem;
  ${(props) => props.theme.mixins.hoverColorPrimary};

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.greyLight1};
  }
`;

export const MainNav = styled.nav`
  ${(props) => props.theme.mixins.flexCenter}
`;

export const MainNavList = styled.ul`
  display: flex;

  > :not(:last-child) {
    margin-right: 6rem;
  }
`;

export const MainNavItem = styled.li`
  text-transform: uppercase;
  position: relative;
  padding: 1.5rem;
  margin-top: -1.5rem;
  ${(props) => props.theme.mixins.hoverColorPrimary};

  &:hover {
    ${SubNavList} {
      transform: scaleY(1);
    }

    ion-icon {
      color: ${(props) => props.theme.styles.colorPrimaryDarker1};
      transform: rotate(180deg);
    }
  }
`;

export const MainNavLink = styled.span`
  ${(props) => props.theme.mixins.flexCenter}

  ion-icon {
    transition: ${(props) => props.theme.styles.transNormal};
    margin: 0 0 0.2rem 0.5rem;
  }
`;
