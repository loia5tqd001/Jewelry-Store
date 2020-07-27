import styled, { css } from 'styled-components';

const BorderBottom = css`
  padding-bottom: 1rem;
  border-bottom: 1px dotted ${(props) => props.theme.colors.greyLight3};
`;

export const Container = styled.main`
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em;

  ${(props) => props.theme.media.lessThan('regular')`
    grid-template-columns: 1fr;
  `}
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const ProductName = styled.h2`
  text-align: left;
  margin: 1rem 0;
  ${BorderBottom}
`;

export const ProductPrice = styled.p`
  font-weight: ${(props) => props.theme.fw.semiBold};
  font-size: 1.8em;
  ${BorderBottom}
`;

export const RedPrice = styled.span`
  color: ${(props) => props.theme.colors.red};
  margin-right: 1.5rem;
`;
export const CrossedPrice = styled.span`
  text-decoration: line-through;
`;

export const Spacer = styled.div`
  margin-top: 5em;
`;

export const SpecList = styled.ul`
  margin: auto auto 1em;
  max-width: 100rem;
`;

export const SpecItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.colors.greyLight1};
  }

  padding: 0.5em 0 0.75em;
  ${(props) => props.theme.media.lessThan('smedium')`
    padding: 0.4em 0 0.6em;
  `}
`;

export const SpecName = styled.span`
  color: ${(props) => props.theme.colors.greyDark2};
  display: inline-block;
  width: 50%;
  /*
  ${(props) => props.theme.media.lessThan('smedium')`
    width: 20em;
  `}
   */
`;

export const TabsContainer = styled.div`
  margin: auto auto 1em;
  max-width: 100rem;
  width: 100%;
  padding: 2em;
`;
