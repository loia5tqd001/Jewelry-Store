import range from 'lodash/range';
import sample from 'lodash/sample';
import chunk from 'lodash/chunk';

const rawData = [
  {
    productId: 2,
    productName: 'Diamond Butterfly Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp02-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp02-2_grande.jpg',
    originalPrice: 760000,
    productSale: null,
  },
  {
    productId: 3,
    productName: 'Diamond Huggie Hoop Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp16-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp16-2_grande.jpg',
    originalPrice: 1200000,
    productSale: 18,
  },
  {
    productId: 4,
    productName: 'Rose Gold Amethyst, Iolite and Diamond Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp14-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp14-2_grande.jpg',
    originalPrice: 700000,
    productSale: null,
  },
  {
    productId: 5,
    productName: 'Rose Gold Ruby and Diamond Drop Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp10-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp10-2_grande.jpg',
    originalPrice: 1400000,
    productSale: null,
  },
  {
    productId: 6,
    productName: 'Rose Gold Tanzanite and Diamond Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp09-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp09-2_grande.jpg',
    originalPrice: 800000,
    productSale: null,
  },
  {
    productId: 7,
    productName: 'Tri Color Gold Diamond Drop Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp03-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp03-2_grande.jpg',
    originalPrice: 900000,
    productSale: 11,
  },
  {
    productId: 8,
    productName: 'White Gold Blue Sapphire Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp01-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp01-2_grande.jpg',
    originalPrice: 1600000,
    productSale: 9,
  },
  {
    productId: 9,
    productName: 'White Gold Sapphire & Diamond Hoop Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp11-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp11-2_grande.jpg',
    originalPrice: 1100000,
    productSale: null,
  },
  {
    productId: 10,
    productName: 'Yellow Gold Multi Sapphire & Diamond Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp13-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp13-2_grande.jpg',
    originalPrice: 1400000,
    productSale: null,
  },
  {
    productId: 22,
    productName: 'Yellow Gold Pink Sapphire Huggie Hoops Earrings',
    srcImage: 'https://product.hstatic.net/1000327411/product/sp12-1_grande.jpg',
    srcOnHover: 'https://product.hstatic.net/1000327411/product/sp12-2_grande.jpg',
    originalPrice: 900000,
    productSale: null,
  },
];

export default chunk(
  range(300).map((index) => {
    const randomProduct = sample(rawData);

    return {
      ...randomProduct,
      productId: index,
    };
  }),
  15,
);
