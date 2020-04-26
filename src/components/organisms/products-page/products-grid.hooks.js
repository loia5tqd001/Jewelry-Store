import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBrands,
  selectPrice,
  selectCollections,
  selectSorting,
} from '../../../redux/filter-sorting/selectors';
import intersection from 'lodash/intersection';
import chunk from 'lodash/chunk';

export const useFilterSorting = (products) => {
  const brandsFiltered = useSelector(selectBrands);
  const priceFiltered = useSelector(selectPrice);
  const collectionsFiltered = useSelector(selectCollections);
  const sorting = useSelector(selectSorting);

  let filterProducts = products;

  // 1. Filter by brands:
  if (brandsFiltered.length > 0) {
    filterProducts = intersection(
      filterProducts,
      brandsFiltered.flatMap((x) => x.items),
    );
  }

  // 2. Filter by prices:
  filterProducts = filterProducts.filter(priceFiltered.callback);

  // 3. Filter by collections:
  if (collectionsFiltered.length > 0) {
    filterProducts = intersection(
      filterProducts,
      collectionsFiltered.flatMap((x) => x.items),
    );
  }

  // 4. Sorting:
  filterProducts.sort(sorting.value);

  return filterProducts;
};

export const usePagingProducts = (products, pagingSize = 15) => {
  const [curPage, setCurPage] = useState(0);

  const paginatedProducts = chunk(products, pagingSize);

  const filterBrands = useSelector(selectBrands);
  const filterPrice = useSelector(selectPrice);
  const filterCollections = useSelector(selectCollections);
  const filterSorting = useSelector(selectSorting);

  useEffect(() => setCurPage(0), [filterBrands, filterPrice, filterCollections, filterSorting]); // reset paging when filters or sorting change

  return {
    curPage,
    setCurPage,
    paginatedProducts,
  };
};
