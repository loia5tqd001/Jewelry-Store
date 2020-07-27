import { types } from './actions';

const initialState = {
  products: [],
  isFetching: false,
  errorMessage: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PRODUCTS_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case types.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        products: payload,
      };
    }

    case types.FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    }

    default:
      return state;
  }
};
