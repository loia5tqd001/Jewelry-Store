import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  color: ${(props) => props['data-fg-static']};
  border: 1px solid ${(props) => props['data-bg-static']};

  transition: ${(props) => props.theme.styles.transSlow4};
  background: linear-gradient(
    to right,
    ${(props) => props['data-bg-sliding']} 0%,
    ${(props) => props['data-bg-sliding']} 50%,
    ${(props) => props['data-bg-static']} 50%,
    ${(props) => props['data-bg-static']} 100%
  );
  ${(props) => props.disabled && `background: ${props['data-bg-static']}`};
  background-size: 200%;
  background-position-x: 100%;

  &:hover {
    background-position-x: 0%;
    color: ${(props) => !props.disabled && props['data-fg-sliding']};
    transition: ${(props) => props.theme.styles.transSlow5};
  }

  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(props) => props['data-bg-static']};
  }
  &::before {
    right: -3px;
    width: 1px;
    top: 1px;
    bottom: -3px;
  }
  &::after {
    bottom: -3px;
    height: 1px;
    left: 1px;
    right: -3px;
  }
`;
