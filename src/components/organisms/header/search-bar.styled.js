import styled from 'styled-components';

export const Form = styled.form`
  display: none;

  ${(props) => props.theme.media.lessThan('regular')`
    display: block;
  `}
`;

export const InputGroup = styled.div`
  box-shadow: ${(props) => props.theme.styles.shadowSuttle3};
  padding: 0.8rem;
  position: relative;
  font-size: 1.1em;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background: ${(props) => props.theme.styles.backgroundSecondary};
  padding: 1.2rem 3rem;

  ${(props) => props.theme.media.lessThan('small')`
    padding: 1.2rem 2rem;
  `}
`;

export const Button = styled.button`
  position: absolute;
  color: ${(props) => props.theme.colors.greyLight3};
  font-size: 2.5rem;
  ${(props) => props.theme.mixins.transparentizeButton};
  padding: 2rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: ${(props) => props.theme.styles.transNormal};

  &:hover {
    color: ${(props) => props.theme.colors.greyLight2};
  }
`;
