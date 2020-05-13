export const types = {
  TOGGLE_FILTER_BRAND: 'TOGGLE_FILTER_BRAND',
  SET_FILTER_PRICE: 'SET_FILTER_PRICE',
  TOGGLE_FILTER_COLLECTION: 'TOGGLE_FILTER_COLLECTION',
  SET_SORTING: 'SET_SORTING',
  RESET_FILTER_SORTING: 'RESET_FILTER_SORTING',
};

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
