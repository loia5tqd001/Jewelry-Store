import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => props.font_size};
  padding: ${(props) => props.padding};
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.fg_static};
  border: 1px solid ${(props) => props.bg_static};

  transition: ${(props) => props.theme.styles.transSlow4};
  background: linear-gradient(
    to right,
    ${(props) => props.bg_sliding} 0%,
    ${(props) => props.bg_sliding} 50%,
    ${(props) => props.bg_static} 50%,
    ${(props) => props.bg_static} 100%
  );
  ${(props) => props.disabled && `background: ${props.bg_static}`};
  background-size: 200%;
  background-position-x: 100%;

  &:hover {
    background-position-x: 0%;
    color: ${(props) => !props.disabled && props.fg_sliding};
    transition: ${(props) => props.theme.styles.transSlow5};
  }

  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(props) => props.bg_static};
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

  ${(props) => props.theme.media.lessThan('medium')`
    padding: ${props.padding_responsive};
  `}
`;
