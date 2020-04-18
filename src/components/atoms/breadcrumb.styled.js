import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.styles.backgroundSecondary};
  font-weight: ${(props) => props.theme.fw.thin};
  font-size: 0.9em;
  user-select: none;
`;

export const BreadcrumbItem = styled.span`
  &:not(:last-child)::after {
    content: '/';
    margin: 1rem;
    color: ${(props) => props.theme.colors.greyLight3};
  }
`;

