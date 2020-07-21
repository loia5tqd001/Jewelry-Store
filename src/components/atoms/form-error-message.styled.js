import styled from 'styled-components';

export const ErrorLabel = styled.label`
  color: ${(props) => props.theme.colors.red};
  margin-bottom: 1rem;
  margin-left: 1rem;
  font-weight: ${(props) => props.theme.fw.light};
`;
