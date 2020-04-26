import React, { useCallback } from 'react';
import PropTypes, { productProps } from '../../../utils/prop-types';
import ReactPaginate from 'react-paginate';
import routes, { StyledLink } from '../../../utils/routes';

import SliderProductItem from '../../molecules/slider-product-item.comp';

import { useFilterSorting, usePagingProducts } from './products-grid.hooks';
import { Grid, Paginate, NoProduct } from './products-grid.styled';

function ProductsGrid({ items }) {
  const products = useFilterSorting(items);
  const { curPage, setCurPage, paginatedProducts } = usePagingProducts(products);
  const onPageChange = useCallback(({ selected }) => setCurPage(selected), [setCurPage]);

  return products.length > 0 ? (
    <>
      <Grid>
        {paginatedProducts[curPage].map((item) => (
          <SliderProductItem key={item.id} {...item} />
        ))}
      </Grid>
      <Paginate>
        <ReactPaginate
          previousLabel={<ion-icon name="return-down-back" />}
          nextLabel={<ion-icon name="return-down-forward" />}
          pageCount={paginatedProducts.length}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          containerClassName={'pagination'}
          onPageChange={onPageChange}
        />
      </Paginate>
    </>
  ) : (
    <NoProduct>
      <span>Không có sản phẩm nào phù hợp. </span>
      <StyledLink to={routes.rerenderProducts.path}>Xem các sản phẩm khác</StyledLink>
    </NoProduct>
  );
}

ProductsGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(productProps)),
};

export default ProductsGrid;
