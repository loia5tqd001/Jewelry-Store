import styled from 'styled-components';

export const SectionContainer = styled.section`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(3)}

  grid-gap: 1.5rem;
  padding: 0.5rem 1rem;

  ${(props) => props.theme.media.lessThan('medium')`
    --no-columns: 2;
  `}

  ${(props) => props.theme.media.lessThan('small')`
    grid-gap: 0.75rem;
    padding: 0 0.5rem;
  `}
`;
