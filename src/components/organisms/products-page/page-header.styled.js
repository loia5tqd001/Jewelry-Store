import styled from 'styled-components';

export const ImageContainer = styled.figure`
  ${(props) => props.theme.mixins.imageFrame}
  max-height: 22em;
  overflow: hidden;
  opacity: 0.95;
`;
