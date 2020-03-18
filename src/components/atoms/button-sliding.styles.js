import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  outline: none;

  border: 1px solid ${(props) => props.bgStatic};

  transition: ${(props) => props.theme.styles.transSlow3};
  background: linear-gradient(
    to right,
    ${(props) => props.bgSliding} 0%,
    ${(props) => props.bgSliding} 50%,
    ${(props) => props.bgStatic} 50%,
    ${(props) => props.bgStatic} 100%
  );
  background-size: 200%;
  background-position-x: 100%;

  &:hover {
    background-position-x: 0%;
    color: ${(props) => props.fgSliding};
    transition: ${(props) => props.theme.styles.transSlow1};
  }

  box-shadow: -1px -1px 0 0 ${(props) => props.bgStatic};
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
