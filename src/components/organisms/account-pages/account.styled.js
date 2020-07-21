import styled from 'styled-components';

export const Header = styled.h1`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLight1};
`;

export const Main = styled.div`
  max-width: 100rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: auto;
`;

export const AsideItem = styled.li`
  margin-bottom: 1rem;
`;
