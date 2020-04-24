import styled from 'styled-components';

export const SliderItem = styled.div`
  padding: 0.5em;
`;

export const SaleLabel = styled.span`
  display: block;
  position: absolute;
  z-index: 10;
  top: 5%;
  left: 5%;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.red};
  box-shadow: ${(props) => props.theme.styles.shadowSubtle1};
  font-weight: ${(props) => props.theme.fw.semiBold};
  background: ${(props) => props.theme.styles.background};
`;

export const ProductImage = styled.div`
  position: relative;
`;

export const ProductDetail = styled.div`
  text-align: center;
  padding: 1em 10%;

  ${(props) => props.theme.media.lessThan('tiny')`
    padding: 1.5rem 3%;
  `}
`;

export const ProductName = styled.h3`
  font-weight: ${(props) => props.theme.fw.normal};
  ${(props) => props.theme.mixins.ellipsisTextOverflow};
`;

export const ProductPrice = styled.p`
  font-weight: ${(props) => props.theme.fw.thin};
  letter-spacing: 0.1rem;

  ${(props) => props.theme.media.lessThan('tiny')`
    letter-spacing: 0;
    font-size: 0.9em;
  `}
`;

export const ProPrice = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.fw.light};
`;

export const ComparePrice = styled.span`
  text-decoration: line-through;
  margin-left: 1rem;
  opacity: 0.6;
`;
