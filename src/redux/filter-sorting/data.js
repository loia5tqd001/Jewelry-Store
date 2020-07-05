export const prices = [
  {
    label: 'Toàn bộ',
    callback: () => true,
  },
  {
    label: 'Dưới 500,000đ',
    callback: ({ price, salePrice }) => {
      const finalPrice = salePrice ? salePrice : price;
      return finalPrice > 0 && finalPrice < 500000;
    },
  },
  {
    label: '500,000đ - 1,000,000đ',
    callback: ({ price, salePrice }) => {
      const finalPrice = salePrice ? salePrice : price;
      return finalPrice >= 500000 && finalPrice <= 1000000;
    },
  },
  {
    label: '1,000,000đ - 1,500,000đ',
    callback: ({ price, salePrice }) => {
      const finalPrice = salePrice ? salePrice : price;
      return finalPrice >= 1000000 && finalPrice <= 1500000;
    },
  },
  {
    label: '2,000,000đ - 5,000,000đ',
    callback: ({ price, salePrice }) => {
      const finalPrice = salePrice ? salePrice : price;
      return finalPrice >= 2000000 && finalPrice <= 5000000;
    },
  },
  {
    label: 'Trên 5,000,000đ',
    callback: ({ price, salePrice }) => {
      const finalPrice = salePrice ? salePrice : price;
      return finalPrice > 5000000;
    },
  },
];

export const sorting = [
  {
    label: 'Sản phẩm nổi bật',
    value: () => 0,
  },
  {
    label: 'Giá: Tăng dần',
    value: (a, b) => {
      if (!a.price) {
        // hang sap ve (price == 0)
        return 1;
      } else if (!b.price) {
        return -1;
      } else {
        return a.price - b.price;
      }
    },
  },
  {
    label: 'Giá: Giảm dần',
    value: (a, b) => b.price - a.price,
  },
  {
    // How to sort alphabetically in js: https://stackoverflow.com/a/45544166/9787887
    label: 'Tên: A-Z',
    value: (a, b) => a.name.localeCompare(b.name),
  },
  {
    label: 'Tên: Z-A',
    value: (a, b) => b.name.localeCompare(a.name),
  },
];
