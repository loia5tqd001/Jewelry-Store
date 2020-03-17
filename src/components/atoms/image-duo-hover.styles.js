import styled, { css } from 'styled-components';

const imgCommon = css`
  transition: ${(props) => props.theme.styles.transSlow1};
`;

export const ImageStatic = styled.img`
  ${imgCommon};
  opacity: 1;
`;

export const ImageOnHover = styled.img`
  ${imgCommon};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

export const ImageContainer = styled.div`
  ${(props) => props.theme.mixins.imageFrame};
  position: relative;

  &:hover {
    ${ImageStatic} {
      opacity: 0;
    }

    ${ImageOnHover} {
      opacity: 1;
    }
  }
`;
