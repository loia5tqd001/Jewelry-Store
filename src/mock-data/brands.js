import products from './products';

const partitions = [
  0,
  ~~((1 * products.length) / 6),
  ~~((2 * products.length) / 6),
  ~~((3 * products.length) / 6),
  ~~((4 * products.length) / 6),
  ~~((5 * products.length) / 6),
  products.length,
];

export default [
  {
    id: 'brand_1',
    brand: "D'ORO",
    image:
      'https://file.hara.vn/1000113711/file/homepage-img1_d5d68be86c464ae6a936d3c64f3b1a02.jpg',
    items: products.slice(partitions[0], partitions[1]),
  },
  {
    id: 'brand_2',
    brand: 'PAVE CLASSICA',
    image:
      'https://file.hara.vn/1000113711/file/homepage-img2_854c619e78cf4550bb8af5cbc9ff3b1f.jpg',
    items: products.slice(partitions[1], partitions[2]),
  },
  {
    id: 'brand_3',
    brand: 'TRIO',
    image:
      'https://file.hara.vn/1000113711/file/homepage-img3_2ad5cec29db6418ebdf161797f25c7f0.jpg',
    items: products.slice(partitions[2], partitions[3]),
  },
  {
    id: 'brand_4',
    brand: 'PAVE ROSE',
    image:
      'https://file.hara.vn/1000113711/file/homepage-img4_13321e97167941a8bc2d400d0aee0afc.jpg',
    items: products.slice(partitions[3], partitions[4]),
  },
  {
    id: 'brand_5',
    brand: 'BOUQUET',
    image:
      'https://file.hara.vn/1000113711/file/homepage-img5_1d21cc86c3404ec38a120db498e2e0d4.jpg',
    items: products.slice(partitions[4], partitions[5]),
  },
  {
    id: 'brand_6',
    brand: 'DUO',
    image:
      'https://file.hara.vn/1000113711/file/homepage-img6_f5e4f7595e23402d9c0e7e7ae05d89c9.jpg',
    items: products.slice(partitions[5], partitions[6]),
  },
];
