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

  ${(props) => props.theme.media.lessThan('small')`
    padding: 0.5em;
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
    margin: 0.5em 2em 0;
    padding: 0 0 1em 0;
  `}

  ${(props) => props.theme.media.lessThan('medium')`
    margin-left: 0.5em;
    margin-right: 0.5em;
  `}
`;

export const HeadingContainer = styled.div`
  grid-area: heading;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 0 2em;

  ${(props) => props.theme.media.lessThan('regular')`
    margin-right: 1em;
    margin-top: 1em;
  `}

  ${(props) => props.theme.media.lessThan('medium')`
    margin: 1em 0 0 -1em;
  `}

  ${(props) => props.theme.media.lessThan('smedium')`
    flex-direction: column;
    align-items: flex-start;
    margin: 1em 0 0.5em -1.5em;
  `}
`;

export const Heading = styled.h2`
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-align: center;

  ${(props) => props.theme.media.lessThan('regular')`
    margin: 0;
  `}

  ${(props) => props.theme.media.lessThan('smedium')`
    margin-bottom: 0.5em;
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
  ${(props) => props.theme.media.lessThan('smedium')`
    --no-columns: 2;
  `}
`;
