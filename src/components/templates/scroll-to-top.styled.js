import styled, { css } from 'styled-components';

export const Container = styled.button`
  position: fixed;
  z-index: 999;
  left: 3rem;
  bottom: 5rem;
  width: 4rem;
  height: 4rem;
  ${(props) => props.theme.mixins.flexCenter}
  background: ${(props) => props.theme.colors.blue};
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
  opacity: 0.95;
  transition: transform 0.3s, opacity 0.5s;
  &:hover {
    transform: translateY(-0.5rem);
  }
  ${(props) =>
    props.atTop &&
    css`
      opacity: 0;
      transform: translateY(-1rem);
    `}
`;
