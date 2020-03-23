import styled from 'styled-components';

export const LinkStyled = styled.span`
  &,
  &:link,
  &:visited {
    color: inherit;
  }

  ${(props) => props.theme.mixins.hoverColorPrimary};
`;
