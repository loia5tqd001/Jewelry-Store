import React, { useEffect, useState } from 'react';
import PropTypes, { productProps } from '../../../utils/prop-types';
import ReactPaginate from 'react-paginate';
import routes, { StyledLink } from '../../../utils/routes';
import chunk from 'lodash/chunk';
import SliderProductItem from '../../molecules/slider-product-item.comp';
import { Grid, Paginate, NoProduct } from './products-grid.styled';

function ProductsGrid({ items }) {
  const [curPage, setCurPage] = useState(0);
  const paginatedProducts = chunk(items, 15);

  useEffect(() => {
    setCurPage(0);
  }, []);

  return items.length > 0 ? (
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
          onPageChange={({ selected }) => setCurPage(selected)}
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
