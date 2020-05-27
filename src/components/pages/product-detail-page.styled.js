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

export const Spacer = styled.div`
  margin-top: 5em;
`;
