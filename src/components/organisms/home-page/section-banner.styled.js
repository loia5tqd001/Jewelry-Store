import styled from 'styled-components';

export const BannerContainer = styled.section`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(3)}

  ${(props) => props.theme.media.lessThan('medium')`
    --no-columns: 1;
    grid-gap: 1rem;
    padding: 1rem;
  `}
`;
