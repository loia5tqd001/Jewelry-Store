import styled from 'styled-components';

export const Container = styled.div`
  margin: 1em auto 2em;
`;

export const Heading = styled.h3`
  margin-bottom: 1em;
`;

export const MarginTop = styled.p`
  margin-top: 1em;
`;

export const RadioButton = styled.label`
  input[type='radio'] {
    display: none;
    ~ ion-icon {
      color: ${(props) => props.theme.colors.greyLight2};
      margin-right: 0.2rem;
    }
    &:checked ~ ion-icon {
      color: ${(props) => props.theme.colors.orange1};
    }
    &:checked ~ [name='radio-button-off'] {
      display: none;
    }
    &:not(:checked) ~ [name='radio-button-on'] {
      display: none;
    }
  }
  ion-icon {
    font-size: 1.1em;
    transform: translateY(-1px);
  }
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 1rem auto 1em;
  ${(props) => props.theme.media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`;

export const NoOptionMessage = styled.p`
  text-align: left;
  font-weight: ${(props) => props.theme.fw.semiBold};
`;

export const TextInput = styled.input`
  padding: 0.75em;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.greyLight3};
  transition: 0.15s;
  /* outline-radius: https://stackoverflow.com/a/6810937/9787887 */
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.greyLight3};
    //border-color: ${(props) => props.theme.colors.blue4};
  }
`;

export const PayButton = styled.button`
  display: block;
  cursor: pointer;
  width: 100%;
  max-width: 50rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1em;
  margin: 1em auto;
  border-radius: 0.4rem;
  border: none;
  font-weight: ${(props) => props.theme.fw.normal};
  background: ${(props) => `
    linear-gradient(to bottom,
      ${props.theme.colors.orange1},
      ${props.theme.colors.orange2})`};
`;

export const MarginAuto = styled.p`
  margin: auto;
  text-align: center;
`;

// react-select with required property: https://codesandbox.io/s/react-select-v2-required-input-3xvvb?fontsize=14&file=/src/FixRequiredSelect.js
export const CustomSelectContainer = styled.div`
  position: relative;
  input {
    cursor: default;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    height: 0;
    opacity: 0;
  }
`;
