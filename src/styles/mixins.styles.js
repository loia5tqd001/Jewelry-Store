import { css } from 'styled-components';

// mitigate blurried text when applying scaling transform:
// https://github.com/NearHuscarl/nearacademy/blob/12dad8a0b8ad3daf374fbd3deaff024b3209f261/src/styles.js#L66-L73
export const applyScale = (scaleStatement) => `
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  ${scaleStatement}
`;

export const absoluteCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imageFrame = css`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// https://stackoverflow.com/q/486563/9787887
export const ellipsisTextOverflow = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const hoverColorPrimary = css`
  transition: ${(props) => props.theme.styles.transNormal};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.styles.colorPrimaryDarker3};
  }
`;
