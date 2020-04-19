import { rings, earings, necklaces } from './products';
import { PAGING_SIZE, chunk } from './_paging.const';

const DATA = [
  {
    id: 'collection_1',
    collection: 'Nhẫn',
    image: 'https://file.hstatic.net/1000327411/collection/landingpage_banner_rings.jpg',
    items: rings,
  },
  {
    id: 'collection_2',
    collection: 'Hoa tai',
    image: 'https://file.hstatic.net/1000327411/collection/landingpage_banner_earrings.jpg',
    items: earings,
  },
  {
    id: 'collection_3',
    collection: 'Dây chuyền',
    image:
      'https://file.hara.vn/1000113711/file/collection_banner_ea28c208f491454191c2856d6e843942.jpg',
    items: necklaces,
  },
  {
    id: 'collection_4',
    image:
      'https://file.hara.vn/1000113711/file/collection_banner_ea28c208f491454191c2856d6e843942.jpg',
    collection: 'Vòng tay',
    items: necklaces,
  },
];

export default DATA.map((collection) => ({
  ...collection,
  items: chunk(collection.items, PAGING_SIZE),
}));
