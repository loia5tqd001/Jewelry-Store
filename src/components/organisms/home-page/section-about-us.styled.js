import styled from 'styled-components';

export const SectionContainer = styled.section`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(2)}

  ${(props) => props.theme.media.lessThan('large')`
    --no-columns: 1;
  `}
`;

export const Left = styled.div`
  background: linear-gradient(#0005, #0005), url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center top;

  height: 50vmax;
  ${(props) => props.theme.mixins.flexCenter};
  flex-direction: column;
`;

export const Heading = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fw.semiBold};
  font-size: 5rem;
  margin: 2rem auto;
`;

export const Right = styled.div`
  background: ${(props) => props.theme.styles.backgroundSecondary};
  padding: 10rem;
  line-height: 1.7;

  ${(props) => props.theme.media.lessThan('medium')`
    padding: 5%;
  `}
`;
