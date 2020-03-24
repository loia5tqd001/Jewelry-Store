import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderTopBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-weight: ${(props) => props.theme.fw.light};
  font-size: 0.95em;
  padding: 1rem;
  background: ${(props) => props.theme.styles.colorPrimary};
`;

export const TextCenter = styled.p`
  text-transform: uppercase;
  text-align: center;
  line-height: 1.7;
`;

export const ResponsiveLabel = styled.span``;

export const HamburgerIcon = styled.div`
  display: none;

  ion-icon {
    font-size: 2.5rem;
    margin: 0 auto 0 1rem;
  }

  ${(props) => props.theme.media.lessThan('regular')`
    ${props.theme.mixins.flexCenter};
  `}
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  > ion-icon {
    margin-right: 0.5rem;
  }

  ${(props) => props.theme.media.lessThan('regular')`
    ${ResponsiveLabel} {
      display: none;
    }
    &[data-component="search"] {
      display: none;
    }
    > ion-icon {
      font-size: 2rem;
    }
  `}
`;

export const TopBarRight = styled.div`
  justify-self: end;
  display: flex;

  ${StyledLink}:first-of-type {
    margin-right: 1.5rem;
  }
`;
