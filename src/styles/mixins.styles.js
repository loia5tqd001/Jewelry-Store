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
export const absoluteCenter = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * @param {*} width
 * @param {*} height
 *
 * Usage:
 *
 * ${imageFrame('30em', '20em')}
 *
 */
export const imageFrame = (width, height) => `
  width: ${width};
  height: ${height};
  position: relative;

  img {  
    max-height: 100%;  
    max-width: 100%; 
    width: auto;
    height: auto;
    position: absolute;  
    top: 0;  
    bottom: 0;  
    left: 0;  
    right: 0;  
    margin: auto;
  }
`;
