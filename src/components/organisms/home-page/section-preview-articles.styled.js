import styled from 'styled-components';

export const SectionContainer = styled.section``;

export const ArticlesContainer = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(3)}
  --no-rows: 1;
  margin: 1rem;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(var(--no-rows), auto);
  grid-auto-rows: 0;
  overflow-y: hidden;
  /* Limit items in css grid: https://stackoverflow.com/a/49100132/9787887 */

  ${(props) => props.theme.media.lessThan('large')`
    --no-columns: 2;
  `}

  ${(props) => props.theme.media.lessThan('medium')`
    --no-columns: 1;
    --no-rows: 2;
  `}
`;
