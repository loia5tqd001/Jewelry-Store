import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const ImageContainer = styled.div`
  ${(props) => props.theme.mixins.imageFrame};
  ${(props) => props.theme.mixins.preventReflow}
  --aspect-ratio: 337/600;
`;

export const ContentContainer = styled.div`
  padding: 1rem;
`;

export const Paragraph = styled.p`
  font-weight: ${(props) => props.theme.fw.light};
`;

export const Title = styled.h3`
  ${(props) => props.theme.mixins.ellipsisTextOverflow};
  font-size: 1.3em;

  &::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.2rem;
    margin: 0.5rem auto 1.2rem;
    border-radius: 999rem;
    background: ${(props) => props.theme.styles.colorPrimaryDarker2};
  }
`;
