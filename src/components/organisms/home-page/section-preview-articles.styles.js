import styled from 'styled-components';

export const SectionContainer = styled.section``;

export const Link = styled.span`
  ${(props) => props.theme.mixins.hoverColorPrimary};
`;

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1.5rem;
  padding: 1rem;
`;
