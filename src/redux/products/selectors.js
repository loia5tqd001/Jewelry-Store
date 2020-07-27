import { createSelector } from 'reselect';
import shuffle from 'lodash/shuffle';

const selectProducts = (state) => state.products;

export const selectAllProducts = createSelector(
  [selectProducts],
  (products) => products.products,
);

export const selectAllProductsInArray = createSelector(
  [selectAllProducts],
  (allProducts) => shuffle(Object.values(allProducts)),
);

export const selectIsFetching = createSelector(
  [selectProducts],
  (products) => products.isFetching,
);
