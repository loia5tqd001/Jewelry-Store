import styled from 'styled-components';

export const HeaderTopBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: ${(props) => props.theme.fw.light};
  font-size: 0.95em;
  padding: 1rem;
  background: ${(props) => props.theme.styles.colorPrimary};
`;

export const TextCenter = styled.p`
  text-transform: uppercase;
  text-align: center;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;

  > ion-icon {
    margin-right: 0.5rem;
  }
`;

export const TopBarRight = styled.div`
  justify-self: end;
  display: flex;

  ${WrapIcon}:first-child {
    margin-right: 1.5rem;
  }
`;