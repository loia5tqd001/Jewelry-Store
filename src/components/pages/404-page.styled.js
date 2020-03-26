import styled from 'styled-components';

export const PageContainer = styled.main`
  min-height: 60vh;
  ${(props) => props.theme.mixins.flexCenter};
  flex-direction: column;
`;

export const Heading = styled.h1`
  margin-top: -3rem;
`;

export const Para = styled.p`
  font-weight: ${(props) => props.theme.fw.light};
  margin: -2rem auto 2rem;
`;

export const Link = styled.span`
  font-weight: ${(props) => props.theme.fw.semiBold};
  color: ${(props) => props.theme.styles.colorPrimaryDarker3};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    height: 3px;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.styles.colorPrimaryDarker3};
    transition: ${(props) => props.theme.styles.transNormal};
  }

  &:hover::after {
    transform: scale(0, 0.5);
    opacity: 0.5;
  }
`;
