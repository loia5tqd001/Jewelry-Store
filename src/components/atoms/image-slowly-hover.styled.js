import styled from 'styled-components';

export const ImageContainer = styled.div`
  ${(props) => props.theme.mixins.imageFrame};
  overflow: hidden;
`;

export const Img = styled.img`
  transition: ${(props) => props.theme.styles.transSlow2};
`;

export const ActionContainer = styled.div`
  background: ${(props) => props.theme.styles.background};
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 1.3em;
`;

export const ButtonTitle = styled.p`
  font-weight: ${(props) => props.theme.fw.thin};
  display: flex;
  align-items: center;

  ion-icon {
    margin-left: 0.2rem;
    transition: transform ${(props) => props.theme.styles.transNormal};
  }
`;

export const Container = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;

    ion-icon {
      transform: translateX(0.3rem);
    }

    ${ButtonTitle} {
      transition: ${(props) => props.theme.styles.transNormal};
      color: ${(props) => props.theme.styles.colorPrimaryDarker3};
    }

    ${Img} {
      ${(props) => props.theme.mixins.applyScale('transform: scale(1.1)')};
    }
  }
`;
