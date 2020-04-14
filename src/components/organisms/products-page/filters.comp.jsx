import React, { useCallback } from 'react';
import { Collapse } from 'react-collapse';

import { FilterPrice, FilterBrand } from '../../molecules/product-filters.comp';

import { useIsOpenResponsive } from '../../../hooks/use-is-open-responsive';
import { Container, Header } from './filters.styled';

function Filters() {
  const isOpenAnyway = useCallback((windowSize) => windowSize.width > 992, []);
  const { isOpen, toggleIsOpen } = useIsOpenResponsive(false, isOpenAnyway);

  return (
    <Container>
      <Header onClick={toggleIsOpen}>
        <span>Bộ lọc sản phẩm</span> <ion-icon name={`chevron-${isOpen ? 'up' : 'down'}-outline`} />
      </Header>
      <Collapse isOpened={isOpen}>
        <FilterBrand />
        <FilterPrice />
      </Collapse>
    </Container>
  );
}

export default Filters;
