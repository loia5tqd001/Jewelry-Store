import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${(props) =>
    props.isStuck &&
    css`
      position: sticky;
      top: 0;
      z-index: 9999;
      background: ${props.theme.styles.background};
      animation: ${props.theme.animations.stickyHeader} 0.3s;
      box-shadow: ${props.theme.styles.shadowDown1};

      display: flex;
      justify-content: space-between;
    `}
`;
