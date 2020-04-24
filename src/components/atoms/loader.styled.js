import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  min-height: 80vh;
`;

// took from: https://loading.io/css/
export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  --base-size: 8px;
  --base-time: 0.12s;
  width: calc(var(--base-size) * 10);
  height: calc(var(--base-size) * 10);

  div {
    display: inline-block;
    position: absolute;
    left: var(--base-size);
    width: calc(var(--base-size) * 2);
    background: ${(props) => props.theme.styles.colorPrimaryDarker1};
    animation: ${(props) => props.theme.animations.loader} calc(var(--base-time) * 8)
      cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    left: var(--base-size);
    animation-delay: calc(var(--base-time) * -2);
  }

  div:nth-child(2) {
    left: calc(var(--base-size) * 4);
    animation-delay: calc(var(--base-time) * -1);
  }

  div:nth-child(3) {
    left: calc(var(--base-size) * 7);
    animation-delay: 0;
  }
`;
