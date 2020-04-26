import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { sorting } from '../../redux/filter-sorting/data';
import { selectSorting } from '../../redux/filter-sorting/selectors';
import { setSorting } from '../../redux/filter-sorting/actions';

import { selectCustomStyles } from './product-dropdown.styled';

function ProductDropdown() {
  const curSorting = useSelector(selectSorting);
  const dispatch = useDispatch();

  return (
    <Select
      options={sorting}
      styles={selectCustomStyles}
      value={curSorting}
      onChange={(payload) => dispatch(setSorting(payload))}
      isSearchable={false}
    />
  );
}

export default ProductDropdown;
