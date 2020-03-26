import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.fgStatic};
  border: 1px solid ${(props) => props.bgStatic};

  transition: ${(props) => props.theme.styles.transSlow4};
  background: linear-gradient(
    to right,
    ${(props) => props.bgSliding} 0%,
    ${(props) => props.bgSliding} 50%,
    ${(props) => props.bgStatic} 50%,
    ${(props) => props.bgStatic} 100%
  );
  ${(props) => props.disabled && `background: ${props.bgStatic}`};
  background-size: 200%;
  background-position-x: 100%;

  &:hover {
    background-position-x: 0%;
    color: ${(props) => !props.disabled && props.fgSliding};
    transition: ${(props) => props.theme.styles.transSlow5};
  }

  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(props) => props.bgStatic};
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
