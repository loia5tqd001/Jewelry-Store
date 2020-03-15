import styled from 'styled-components';

export const ArrowContainer = styled.div`
  position: absolute;
  z-index: 999;
  left: 1rem;
  top: calc(50% - 3rem);
  transform: translateY(-50%);

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  ${(props) => props.theme.mixins.flexCenter};
  box-shadow: ${(props) => props.theme.styles.shadowSuttle2};
`;
