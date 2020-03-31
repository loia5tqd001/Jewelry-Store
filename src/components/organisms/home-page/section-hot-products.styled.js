import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding-top: 2rem;
`;

export const ProductsContainer = styled.div`
  display: grid;
  /*
    Why repeat(5, 1fr) leaks to blowout: https://css-tricks.com/preventing-a-grid-blowout/ 
    only either repeat(5, minmax(0, 1fr)) or repeat(5, 20%) will work
  */
  grid-template-columns: repeat(5, minmax(0, 1fr)); 
`;
