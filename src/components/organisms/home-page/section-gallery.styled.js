import styled from 'styled-components';

export const SectionContainer = styled.section`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(6)}

  ${(props) => props.theme.media.lessThan('regular')`
    --no-columns: 4;
  `}

  ${(props) => props.theme.media.lessThan('small')`
    --no-columns: 3;
  `}
`;
