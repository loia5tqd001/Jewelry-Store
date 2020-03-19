import styled from 'styled-components';

export const Link = styled.span`
  ${(props) => props.theme.mixins.hoverColorPrimary};
`;

export const SliderArrow = styled.div`
  position: absolute;
  z-index: 999;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
  ${(props) => props['data-anchor'] + ': 2rem'};

  &::before,
  &::after {
    text-shadow: ${(props) => props.theme.styles.shadowSuttle2};
    font-size: 4rem;
    ${(props) => props.theme.mixins.absoluteCenter};
  }
`;
