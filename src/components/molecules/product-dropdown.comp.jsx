import React, { useState } from 'react';
import Select from 'react-select';

import { selectCustomStyles } from './product-dropdown.styled';

const options = [
  { value: 'featured-products', label: 'Sản phẩm nổi bật' },
  { value: 'best-selling', label: 'Sản phẩm bán chạy' },
  { value: 'price-ascending', label: 'Giá: Tăng dần' },
  { value: 'price-descending', label: 'Giá: Giảm dần' },
  { value: 'name-a-z', label: 'Tên: A-Z' },
  { value: 'name-z-a', label: 'Tên: Z-A' },
];

function ProductDropdown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Select
        options={options}
        styles={selectCustomStyles}
        value={selectedOption}
        onChange={setSelectedOption}
        isSearchable={false}
      />
    </>
  );
}

export default ProductDropdown;
