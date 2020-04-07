import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import { FilterPrice, FilterBrand } from '../../molecules/product-filters.comp';

function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>
        <span>Bộ lọc sản phẩm</span>{' '}
        <ion-icon
          onClick={() => setIsOpen(!isOpen)}
          name={`chevron-${isOpen ? 'up' : 'down'}-outline`}
        />
      </p>
      <FilterBrand />
      <FilterPrice />
    </div>
  );
}

export default Filters;
