import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > * {
    padding: 10% 20%;
    border: 1px solid ${(props) => props.theme.colors.greyLight1};
    position: relative;
    margin: -1px -1px 0 0;
  }
`;

export const Title = styled.h2`
  position: relative;
  text-align: left;
  
  &::after {
    content: '';
    width: 10rem;
    height: 0.4rem;
    background: currentColor;
    position: absolute;
    top: 2em;
    left: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.greyLight1};
  border: 1px solid transparent;
  outline: none;
  padding: 1.5em;
  
  &:focus {
    background: none;
    border: 1px solid ${(props) => props.theme.colors.greyLight1};
  }
`;
