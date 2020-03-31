import styled, { css } from 'styled-components';

export const HeaderLogoContainer = styled.div`
  padding: 1rem 0;

  ${(props) => props.theme.media.lessThan('regular')`
    padding: 0;
  `}
`;

export const LogoHeading = styled.h1`
  color: ${(props) => props.theme.styles.colorPrimaryDarker1};

  ${(props) => props.isHeaderStuck && css`
    font-size: 2.5rem;
    padding: 0 2rem;
    margin: 0;
  `}
`;
