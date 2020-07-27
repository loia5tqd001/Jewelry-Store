import shuffle from 'lodash/shuffle';

export const rings = [
  {
    id: 'ring_1',
    name: 'Yellow Gold Multi Sapphire & Diamond Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp07-2_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp07-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp07-3_grande.jpg',
    ],
    price: 1500000,
    salePrice: 1300000,
  },
  {
    id: 'ring_2',
    name: 'White Sapphire Band Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp08-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp08-3_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp08-4_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp08-5_grande.jpg',
    ],
    price: 760000,
    salePrice: null,
  },
  {
    id: 'ring_3',
    name: 'White Gold Diamond Solitaire Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp05-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp05-2_grande.jpg',
    ],
    price: 1200000,
    salePrice: null,
  },
  {
    id: 'ring_4',
    name: 'White Gold Blue Sapphire Diamond Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp06-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp06-2_grande.jpg',
    ],
    price: 1000000,
    salePrice: null,
  },
  {
    id: 'ring_5',
    name: 'Diamond Wide Band Bracelet',
    images: [
      'https://product.hstatic.net/1000327411/product/sp17-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp17-2_grande.jpg',
    ],
    price: 1000000,
    salePrice: null,
  },
  {
    id: 'ring_6',
    name: 'Diamond Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp19-4_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp19-5_grande.jpg',
    ],
    price: 1400000,
    salePrice: null,
  },
  {
    id: 'ring_7',
    name: 'White Diamond Solitaire Ring',
    images: [
      'https://product.hstatic.net/1000327411/product/sp05-5_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp05-6_grande.jpg',
    ],
    price: 1350000,
    salePrice: 1140000,
  },
];

export const earrings = [
  {
    id: 'earring_1',
    name: 'Diamond Butterfly Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp02-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp02-2_grande.jpg',
    ],
    price: 760000,
    salePrice: null,
  },
  {
    id: 'earring_2',
    name: 'Diamond Huggie Hoop Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp16-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp16-2_grande.jpg',
    ],
    price: 1200000,
    salePrice: 980000,
  },
  {
    id: 'earring_3',
    name: 'Rose Gold Amethyst, Iolite and Diamond Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp14-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp14-2_grande.jpg',
    ],
    price: 700000,
    salePrice: null,
  },
  {
    id: 'earring_4',
    name: 'Rose Gold Ruby and Diamond Drop Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp10-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp10-2_grande.jpg',
    ],
    price: 1400000,
    salePrice: null,
  },
  {
    id: 'earring_5',
    name: 'Rose Gold Tanzanite and Diamond Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp09-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp09-2_grande.jpg',
    ],
    price: 800000,
    salePrice: null,
  },
  {
    id: 'earring_6',
    name: 'Tri Color Gold Diamond Drop Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp03-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp03-2_grande.jpg',
    ],
    price: 900000,
    salePrice: 800000,
  },
  {
    id: 'earring_7',
    name: 'White Gold Blue Sapphire Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp01-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp01-2_grande.jpg',
    ],
    price: 1600000,
    salePrice: 1450000,
  },
  {
    id: 'earring_8',
    name: 'White Gold Sapphire & Diamond Hoop Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp11-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp11-2_grande.jpg',
    ],
    price: 1100000,
    salePrice: null,
  },
  {
    id: 'earring_9',
    name: 'Yellow Gold Multi Sapphire & Diamond Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp13-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp13-2_grande.jpg',
    ],
    price: 1400000,
    salePrice: null,
  },
  {
    id: 'earring_10',
    name: 'Yellow Gold Pink Sapphire Huggie Hoops Earrings',
    images: [
      'https://product.hstatic.net/1000327411/product/sp12-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp12-2_grande.jpg',
    ],
    price: 900000,
    salePrice: null,
  },
];

export const necklaces = [
  {
    id: 'necklace_1',
    name: 'White Gold Diamond Palm Tree Necklace',
    images: [
      'https://product.hstatic.net/1000327411/product/sp22-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp22-2_grande.jpg',
    ],
    price: 460000,
    salePrice: null,
  },
  {
    id: 'necklace_2',
    name: 'Rose Gold Diamond Vine Pendant',
    images: [
      'https://product.hstatic.net/1000327411/product/sp21-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp21-2_grande.jpg',
    ],
    price: 1650000,
    salePrice: null,
  },
  {
    id: 'necklace_3',
    name: 'Rose Silver Diamond Vine Pendant',
    images: [
      'https://product.hstatic.net/1000327411/product/sp21-3_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp21-4_grande.jpg',
    ],
    price: 1150000,
    salePrice: null,
  },
  {
    id: 'necklace_4',
    name: 'White Gold Blue & White Diamond Starfish Pendant',
    images: [
      'https://product.hstatic.net/1000327411/product/sp20-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp20-2_grande.jpg',
    ],
    price: 500000,
    salePrice: null,
  },
  {
    id: 'necklace_5',
    name: 'White Ruby & Diamond Rose Pendant',
    images: [
      'https://product.hstatic.net/1000327411/product/sp20-3_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp20-4_grande.jpg',
    ],
    price: 600000,
    salePrice: null,
  },
  {
    id: 'necklace_6',
    name: 'White Gold Blue & White Diamond Heart Pendant',
    images: [
      'https://product.hstatic.net/1000327411/product/sp20-5_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp20-6_grande.jpg',
    ],
    price: 550000,
    salePrice: null,
  },
  {
    id: 'necklace_7',
    name: "Effy D'Oro 14K Yellow Gold Diamond, 0.99 TCW",
    images: [
      'https://product.hstatic.net/1000327411/product/sp04-1_grande.jpg',
      'https://product.hstatic.net/1000327411/product/sp04-2_grande.jpg',
    ],
    price: 1000000,
    salePrice: 850000,
  },
];

const products = shuffle([...rings, ...earrings, ...necklaces]);
export const getAllProducts = async () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // delay utility in js: https://stackoverflow.com/a/47480429/9787887
  await delay(Math.random() * 1500 + 150);
  return products;
}
