import styled, { css } from 'styled-components';

export const Content = styled.div`
  transition: ${(props) => props.theme.styles.transSlow4};
  overflow: hidden;
  font-size: 0.9em;
`;

export const Heading = styled.h4`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fw.light};
  color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    background: ${(props) => props.color};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15rem;
  }

  ion-icon {
    font-size: 0.9em;
  }
  ${(props) => props.isFolded && css`
    ion-icon {
      transform: rotate(180deg);
    }
  `};
`;
