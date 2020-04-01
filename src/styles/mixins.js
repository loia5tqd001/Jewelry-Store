import { css } from 'styled-components';

// mitigate blurried text when applying scaling transform:
// https://github.com/NearHuscarl/nearacademy/blob/12dad8a0b8ad3daf374fbd3deaff024b3209f261/src/styles.js#L66-L73
export const applyScale = (scaleStatement) => css`
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

export const transparentizeButton = css`
  background: ${(props) => props.theme.colors.transparent};
  cursor: pointer;
  border: none;
  outline: none;
`;

// Why repeat(5, 1fr) leaks to blowout: 
// https://css-tricks.com/preventing-a-grid-blowout/ 
// only either repeat(5, minmax(0, 1fr)) or repeat(5, 20%) will work
// We need to write `minmax(0, 1fr)` instead of just `1fr` to prevent blowout.
export const gridDivideIntoColumns = (noColumns) => css`
  --no-columns: ${noColumns};
  display: grid;
  grid-template-columns: repeat(var(--no-columns), minmax(0, 1fr));
`;
