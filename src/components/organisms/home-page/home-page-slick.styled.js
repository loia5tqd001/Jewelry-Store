import styled from 'styled-components';

export const SliderItem = styled.div`
  outline: none;
  ${(props) => props.theme.mixins.imageFrame}
  min-height: ${(600 / 1920) * 100}vw;
`;

// Example: https://react-slick.neostack.com/docs/example/append-dots/
export const SliderDots = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
`;
