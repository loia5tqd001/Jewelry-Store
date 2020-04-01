import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding-top: 2rem;

  ${(props) => props.theme.media.lessThan('medium')`
    padding-top: 0;
  `}
`;

export const ProductsContainer = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}

  ${(props) => props.theme.media.lessThan('large')`
    --no-columns: 4;
  `}

  ${(props) => props.theme.media.lessThan('regular')`
    --no-columns: 3;
  `}

  ${(props) => props.theme.media.lessThan('medium')`
    --no-columns: 2;
  `}
`;
