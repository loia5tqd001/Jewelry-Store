import React, { useCallback } from 'react';
import { Collapse } from 'react-collapse';

import { FilterPrice, FilterBrand } from '../../molecules/product-filters.comp';

import { useIsOpenResponsive } from '../../../hooks/use-is-open-responsive';

function Filters() {
  const isOpenAnyway = useCallback((windowSize) => windowSize.width > 992, []);
  const { isOpen, toggleIsOpen } = useIsOpenResponsive(false, isOpenAnyway);

  return (
    <div>
      <p>
        <span>Bộ lọc sản phẩm</span>{' '}
        <ion-icon onClick={toggleIsOpen} name={`chevron-${isOpen ? 'up' : 'down'}-outline`} />
      </p>
      <Collapse isOpened={isOpen}>
        <FilterBrand />
        <FilterPrice />
      </Collapse>
    </div>
  );
}

export default Filters;
