import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrice } from '../../redux/filter-sorting/selectors';
import {
  setFilterPrice,
  toggleFilterBrand,
  toggleFilterCollection,
} from '../../redux/filter-sorting/actions';
import { prices } from '../../redux/filter-sorting/data';
import brands from '../../mock-data/brands';
import collections from '../../mock-data/collections';

import { FilterContainer, Heading, Label, Input } from './product-filters.styled';

const Filter = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <FilterContainer>
      <Heading onClick={() => setIsOpen(!isOpen)}>
        <span>{heading}</span> <ion-icon name={isOpen ? 'remove' : 'add'} />
      </Heading>
      <Collapse isOpened={isOpen}>{children}</Collapse>
    </FilterContainer>
  );
};

export function FilterPrice() {
  const priceFilter = useSelector(selectPrice);
  const dispatch = useDispatch();

  return (
    <Filter heading="Giá sản phẩm">
      <ul>
        {prices.map((price, i) => {
          const id = `price${i + 1}`;

          return (
            <li key={id}>
              <Input
                type="radio"
                name="price"
                id={id}
                onChange={() => dispatch(setFilterPrice(price))}
                checked={price === priceFilter}
              />
              <Label htmlFor={id}>{price.label}</Label>
            </li>
          );
        })}
      </ul>
    </Filter>
  );
}

export function FilterBrand() {
  const dispatch = useDispatch();

  return (
    <Filter heading="Nhãn hiệu">
      <ul>
        {brands.map((brand, i) => {
          const id = `brand${i + 1}`;

          return (
            <li key={id}>
              <Input type="checkbox" id={id} onChange={() => dispatch(toggleFilterBrand(brand))} />
              <Label htmlFor={id}>{brand.brand}</Label>
            </li>
          );
        })}
      </ul>
    </Filter>
  );
}

export function FilterProductType() {
  const dispatch = useDispatch();

  return (
    <Filter heading="Sản phẩm">
      <ul>
        {collections.map((collection, i) => {
          const id = `collection${i + 1}`;

          return (
            <li key={id}>
              <Input
                type="checkbox"
                id={id}
                onChange={() => dispatch(toggleFilterCollection(collection))}
              />
              <Label htmlFor={id}>{collection.collection}</Label>
            </li>
          );
        })}
      </ul>
    </Filter>
  );
}

export default FilterPrice;
