import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  padding: 1rem 0;

  ${(props) => props.theme.media.lessThan('regular')`
    padding: 0;
  `}
`;

export const LogoHeading = styled.h1`
  color: ${(props) => props.theme.styles.colorPrimaryDarker1};
`;
