import styled from 'styled-components';

export const SliderItem = styled.div`
  ${(props) => props.theme.mixins.imageFrame};
  outline: none;
`;

// Example: https://react-slick.neostack.com/docs/example/append-dots/
export const SliderDots = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
`;
