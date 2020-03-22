import styled from 'styled-components';

export const PageContainer = styled.main`
  min-height: 80vh;
  ${(props) => props.theme.mixins.flexCenter};
  flex-direction: column;
`;

export const Para = styled.p`
  font-weight: ${(props) => props.theme.fw.light};
  margin-bottom: 4rem;
`;
