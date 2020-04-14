import styled from 'styled-components';

export const Container = styled.div`
  .ReactCollapse--collapse {
    transition: height ${(props) => props.theme.styles.transSlow5};
    font-size: 0.95em;
    margin-left: 1.5em;
  }
`;

export const Header = styled.p`
  padding: 1em;
  background: ${(props) => props.theme.styles.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fw.semiBold};

  ${(props) => props.theme.media.lessThan('smedium')`
    padding: 0.7em 1em;
  `}
`;
