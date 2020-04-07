import styled from 'styled-components';

export const PageContainer = styled.section`
  position: relative;
  z-index: 1;
`;

export const ImageContainer = styled.figure`
  ${(props) => props.theme.mixins.imageFrame}
  max-height: 22em;
  overflow: hidden;
  opacity: 0.95;
`;

export const MainSection = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'aside heading'
    'aside products';
  padding: 0.5em 1em;

  ${(props) => props.theme.media.lessThan('regular')`
    grid-template-areas:
      'heading heading'
      'aside aside'
      'products products';
  `}
`;

export const FilterContainer = styled.aside`
  grid-area: aside;
  padding: 2em 1.5em 1em 0.5em;
  position: sticky;
  top: 3em;
  margin-top: 10em;
  align-self: flex-start;

  ${(props) => props.theme.media.lessThan('regular')`
    position: static;
    margin: 0 auto 0 4em;
  `}
`;

export const HeadingContainer = styled.div`
  grid-area: heading;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 3rem;
`;

export const Heading = styled.h2`
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-align: center;

  ${(props) => props.theme.media.lessThan('regular')`
    margin: 0.5em auto 0 1em;
  `}
`;

export const ProductsGrid = styled.div`
  grid-area: products;

  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}

  ${(props) => props.theme.media.lessThan('huge')`
    --no-columns: 4;
  `}
  ${(props) => props.theme.media.lessThan('large')`
    --no-columns: 3;
  `}
`;
