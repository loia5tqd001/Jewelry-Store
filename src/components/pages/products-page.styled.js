import styled from 'styled-components';

export const ImageContainer = styled.figure`
  ${(props) => props.theme.mixins.imageFrame}
  max-height: 22em;
  overflow: hidden;
  opacity: 0.95;
`;

export const MainSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1em;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 3rem;
`;

export const Heading = styled.h2`
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-align: center;
`;

export const ProductsGrid = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}
`;

export const FilterContainer = styled.aside`
  padding: 2em 2em 1em 0.5em;
  position: sticky;
  top: 3em;
  margin-top: 10em;
  align-self: flex-start;
`;
