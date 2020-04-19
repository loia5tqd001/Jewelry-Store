import React, { useState, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import SliderProductItem from '../../molecules/slider-product-item.comp';

import { Grid, Paginate } from './products-grid.styled';

function ProductsGrid({ items }) {
  const [curPage, setCurPage] = useState(0);
  const onPageChange = useCallback(({ selected }) => setCurPage(selected), []);

  return (
    <>
      <Grid>
        {items[curPage].map((item) => (
          <SliderProductItem key={item.id} {...item} />
        ))}
      </Grid>

      <Paginate>
        <ReactPaginate
          previousLabel={<ion-icon name="return-down-back" />}
          nextLabel={<ion-icon name="return-down-forward" />}
          pageCount={items.length}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          containerClassName={'pagination'}
          onPageChange={onPageChange}
        />
      </Paginate>
    </>
  );
}

export default ProductsGrid;
