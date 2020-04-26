import types from './types';

export const toggleFilterBrand = (payload) => ({
  type: types.TOGGLE_FILTER_BRAND,
  payload,
});

export const setFilterPrice = (payload) => ({
  type: types.SET_FILTER_PRICE,
  payload,
});

export const toggleFilterCollection = (payload) => ({
  type: types.TOGGLE_FILTER_COLLECTION,
  payload,
});

export const setSorting = (payload) => ({
  type: types.SET_SORTING,
  payload,
});

export const resetFilterSorting = () => ({
  type: types.RESET_FILTER_SORTING,
});
