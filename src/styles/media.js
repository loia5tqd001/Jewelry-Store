import { generateMedia, pxToEm } from 'styled-media-query';

// Use breakpoints from the original site: https://jwelry-store.myharavan.com/
// Use em unit for better accessibility
export default generateMedia(
  pxToEm({
    '4k': '2500px',
    huge: '1600px',
    large: '1200px',
    big: '1024px',
    regular: '992px',
    medium: '768px',
    smedium: '600px', //https://english.stackexchange.com/a/163611
    small: '480px',
    tiny: '400px',
  }),
);
