import styled from 'styled-components';

export const NavItem = styled.li`
  margin: 1rem auto 0.5rem;

  .ReactCollapse--collapse {
    transition: height ${(props) => props.theme.styles.transSlow5};
  }
`;

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubList = styled.ul`
  font-size: 0.9em;
  margin-left: 2rem;
  font-weight: ${(props) => props.theme.fw.light};
`;
