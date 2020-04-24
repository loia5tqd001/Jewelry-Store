import styled from 'styled-components';

export const ImageContainer = styled.figure`
  ${(props) => props.theme.mixins.imageFrame}
  ${(props) => props.theme.mixins.preventReflow}
  --aspect-ratio: 300/1500;
  max-height: 22em;
  overflow: hidden;
  opacity: 0.95;
`;
