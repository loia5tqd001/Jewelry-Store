import styled from 'styled-components';

export const SliderArrow = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
  ${(props) => props['data-anchor'] + ': 2rem'};

  &::before,
  &::after {
    text-shadow: ${(props) => props.theme.styles.shadowSubtle2};
    font-size: 4rem;
    ${(props) => props.theme.mixins.absoluteCenter};
  }
`;
