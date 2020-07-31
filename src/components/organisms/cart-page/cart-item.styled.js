import styled from 'styled-components';

export const ProductItem = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 1em;
  grid-template-areas:
    'image name price'
    'image button ...';
`;

export const ProductImage = styled.div`
  grid-area: image;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageFrame = styled.div`
  --size: ${(props) => (props.fixed ? '10rem' : '15rem')};
  width: var(--size);
  height: var(--size);
  ${(props) => props.theme.mixins.imageFrame};
  transition: 0.2s;
`;

export const RemoveItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem auto;
  order: 1;
  ion-icon {
    margin-right: 0.5rem;
  }
  &:hover {
    font-weight: ${(props) => props.theme.fw.normal};
    + ${ImageFrame} {
      transform: translateY(-0.5rem);
      opacity: 0.8;
    }
  }
`;

export const ProductName = styled.p`
  grid-area: name;
  font-weight: ${(props) => props.theme.fw.bold};
`;

export const ProductPrice = styled.div`
  grid-area: price;
  text-align: right;
`;

export const SaledPrice = styled.p`
  color: ${(props) => props.theme.colors.red};
`;

export const CrossedPrice = styled.p`
  text-decoration: line-through;
`;
