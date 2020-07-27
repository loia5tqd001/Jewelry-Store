import { getAllProducts } from './data';

export const types = {
  FETCH_PRODUCTS_START: 'FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
};

const fetchProductsStart = () => ({
  type: types.FETCH_PRODUCTS_START,
});

const fetchProductsSuccess = (payload) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload,
});

const fetchProductsFailure = (payload) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload,
});

export const fetchProductsAsync = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());

    getAllProducts()
      .then((snapshot) => {
        dispatch(fetchProductsSuccess(snapshot));
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
