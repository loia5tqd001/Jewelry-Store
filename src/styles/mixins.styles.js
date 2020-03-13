import { css } from 'styled-components';

const pxToEm = (pixel) => pixel / 16;

/**
 * @param {*} sizeInPixel
 * @param {*} type
 * @param {*} content
 *
 * Usage:
 *
 * ${media(1920, 'min-width')} {
 *    font-size: 18px;
 *  }
 *
 * !!! Only for desktop first approach
 */
export const media = (sizeInPixel, type = 'max-width') =>
  `@media only screen and (${type}: (${pxToEm(sizeInPixel)}em))`;

/**
 * @param {*} scaleStatement
 *
 * Usage:
 *
 * ${applyScale(`transform: scale(2);`)}
 *
 */
export const applyScale = (scaleStatement) => `
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  ${scaleStatement}
`;

/**
 * @param {*} content
 *
 * Usage:
 *
 * ${absoluteCenter}
 *
 */
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
