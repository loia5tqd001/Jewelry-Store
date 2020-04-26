import { createSelector } from 'reselect';

const selectFilterSorting = (state) => state.filterSorting;

export const selectBrands = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.brands,
);

export const selectPrice = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.price,
);

export const selectCollections = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.collections,
);

export const selectSorting = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.sorting,
);
