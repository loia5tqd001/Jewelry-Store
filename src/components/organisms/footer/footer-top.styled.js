import styled from 'styled-components';

export const FooterTopContainer = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(4)}
  grid-gap: 2.5rem;

  ${(props) => props.theme.media.lessThan('regular')`
    --no-columns: 2;
  `}
  ${(props) => props.theme.media.lessThan('smedium')`
    --no-columns: 1;
    grid-gap: 0.5rem;
  `}
`;

export const Li = styled.li`
  margin-bottom: 0.5rem;
`;

export const SubscribeParagraph = styled.p`
  margin-bottom: 1rem;
`;
