import styled from 'styled-components';

export const FooterBottomContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter};
  flex-direction: column;
  margin-top: 3rem;
  text-align: center;
`;

export const IconRotate = styled.a`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.colors.greyLight3};
  border-radius: 50%;
  ${(props) => props.theme.mixins.flexCenter};
  position: relative;

  &,
  &::before,
  ion-icon {
    transition: ${(props) => props.theme.styles.transSlow1};
  }

  &:link,
  &:visited {
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: ${(props) => props.theme.styles.colorPrimary};
    ${(props) => props.theme.mixins.applyScale('transform: scale(0.9)')};
  }

  &:hover {
    background: ${(props) => props.theme.styles.colorPrimaryDarker2};

    &::before {
      ${(props) => props.theme.mixins.applyScale('transform: scale(1.25)')};
    }

    ion-icon {
      transform: rotate(360deg) scale(1.15);
    }
  }
`;

export const SocialList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  margin-top: 1rem;
  position: relative;
  z-index: 0;
`;
