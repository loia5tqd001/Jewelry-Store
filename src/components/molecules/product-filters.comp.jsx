import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

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
  return (
    <Filter heading="Giá sản phẩm">
      <ul>
        <li>
          <Input type="checkbox" id="price1" />
          <Label for="price1">
            <small>Dưới</small> 500,000đ
          </Label>
        </li>
        <li>
          <Input type="checkbox" id="price2" />
          <Label for="price2">500,000đ - 1,000,000đ</Label>
        </li>
        <li>
          <Input type="checkbox" id="price3" />
          <Label for="price3">1,000,000đ - 1,500,000đ</Label>
        </li>
        <li>
          <Input type="checkbox" id="price4" />
          <Label for="price4">2,000,000đ - 5,000,000đ</Label>
        </li>
        <li>
          <Input type="checkbox" id="price5" />
          <Label for="price5">
            <small>Trên</small> 5,000,000đ
          </Label>
        </li>
      </ul>
    </Filter>
  );
}

export function FilterBrand() {
  return (
    <Filter heading="Nhãn hiệu">
      <ul>
        <li>
          <Input type="checkbox" id="brand1" />
          <Label for="brand1">D'ORO</Label>
        </li>
        <li>
          <Input type="checkbox" id="brand2" />
          <Label for="brand2">PAVE CLASSICA</Label>
        </li>
        <li>
          <Input type="checkbox" id="brand3" />
          <Label for="brand3">TRIO</Label>
        </li>
        <li>
          <Input type="checkbox" id="brand4" />
          <Label for="brand4">PAVE ROSE</Label>
        </li>
        <li>
          <Input type="checkbox" id="brand5" />
          <Label for="brand5">BOUQUET</Label>
        </li>
        <li>
          <Input type="checkbox" id="brand6" />
          <Label for="brand6">DUO</Label>
        </li>
      </ul>
    </Filter>
  );
}

export function FilterProductType() {
  return (
    <Filter heading="Sản phẩm">
      <ul>
        <li>
          <Input type="checkbox" id="product1" />
          <Label for="product1">Nhẫn</Label>
        </li>
        <li>
          <Input type="checkbox" id="product2" />
          <Label for="product2">Hoa tai</Label>
        </li>
        <li>
          <Input type="checkbox" id="product3" />
          <Label for="product3">Dây chuyền</Label>
        </li>
        <li>
          <Input type="checkbox" id="product4" />
          <Label for="product4">Vòng tay</Label>
        </li>
      </ul>
    </Filter>
  );
}

export default FilterPrice;
