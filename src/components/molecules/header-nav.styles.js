import styled from 'styled-components';

export const SubNavList = styled.ul`
  text-transform: initial;
  color: initial;
  font-weight: ${(props) => props.theme.fw.thin};

  transition: ${(props) => props.theme.styles.transSlow1};
  transform: scaleY(0);
  transform-origin: top;

  position: absolute;
  top: 100%;
  width: max-content;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  border-top: 0.2rem solid ${(props) => props.theme.colors.greyDark2};
  margin-top: -0.2rem;
  padding-top: 0.2rem;
`;

export const SubNavItem = styled.li`
  padding: 0.5rem 2rem;
  transition: ${(props) => props.theme.styles.transFast1};

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.greyLight1};
  }

  &:hover {
    color: ${(props) => props.theme.styles.colorPrimaryDarker3};
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
  transition: ${(props) => props.theme.styles.transNormal};
  position: relative;
  padding: 1rem 1.5rem;

  &:hover {
    &,
    ion-icon {
      color: ${(props) => props.theme.styles.colorPrimaryDarker1};
    }

    ${SubNavList} {
      transform: scaleY(1);
    }

    ion-icon {
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
