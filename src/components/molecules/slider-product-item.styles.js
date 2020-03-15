import styled from 'styled-components';

export const SliderItem = styled.div`
  padding: 1rem;
`;

export const SaleLabel = styled.span`
  display: block;
  position: absolute;
  z-index: 999;
  top: 5%;
  left: 5%;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.red};
  box-shadow: ${(props) => props.theme.styles.shadowSuttle1};
  font-weight: ${(props) => props.theme.fw.semiBold};
  background: ${(props) => props.theme.styles.background};
`;

export const ProductImage = styled.div`
  position: relative;
`;

export const ProductDetail = styled.div`
  padding: 2rem 5rem;
`;

export const ProductName = styled.h3`
  font-weight: ${(props) => props.theme.fw.normal};
  ${(props) => props.theme.mixins.ellipsisTextOverflow};
  ${(props) => props.theme.mixins.hoverColorPrimary};
`;

export const ProductPrice = styled.p`
  text-align: center;
  font-weight: ${(props) => props.theme.fw.thin};
  letter-spacing: 0.1rem;
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
