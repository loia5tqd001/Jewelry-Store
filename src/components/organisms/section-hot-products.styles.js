import styled from 'styled-components';

export const Link = styled.span`
  ${(props) => props.theme.mixins.hoverColorPrimary};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
`