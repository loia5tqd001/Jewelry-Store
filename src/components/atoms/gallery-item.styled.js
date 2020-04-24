import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.mixins.imageFrame};
  ${(props) => props.theme.mixins.preventReflow}
  --aspect-ratio: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${(props) => props.theme.styles.transSlow1};
    background: ${(props) => props.theme.styles.colorPrimary};
    opacity: 0;
    ${(props) => props.theme.mixins.applyScale('transform: scale(0.8)')};
  }
  &:hover::after {
    opacity: 0.3;
    ${(props) => props.theme.mixins.applyScale('transform: scale(1)')};
  }
`;
