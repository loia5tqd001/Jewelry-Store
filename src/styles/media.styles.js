import { generateMedia, pxToEm } from 'styled-media-query';

// Use breakpoints from the original site: https://jwelry-store.myharavan.com/
// Use em unit for better accessibility
export default generateMedia(
  pxToEm({
    huge: '1600px',
    large: '1200px',
    big: '1024px',
    regular: '992px',
    medium: '768px',
    small: '480px',
  }),
);
