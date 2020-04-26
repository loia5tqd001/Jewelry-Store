import types from './types';

import { prices, sorting } from './data';

const initialState = {
  brands: [],
  price: prices[0],
  collections: [],
  sorting: sorting[0],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_FILTER_BRAND: {
      const { brands } = state;

      if (brands.includes(payload)) {
        return {
          ...state,
          brands: brands.filter((x) => x !== payload),
        };
      } else {
        return {
          ...state,
          brands: [...brands, payload],
        };
      }
    }

    case types.SET_FILTER_PRICE: {
      return {
        ...state,
        price: payload,
      };
    }

    case types.TOGGLE_FILTER_COLLECTION: {
      const { collections } = state;

      if (collections.includes(payload)) {
        return {
          ...state,
          collections: collections.filter((x) => x !== payload),
        };
      } else {
        return {
          ...state,
          collections: [...collections, payload],
        };
      }
    }

    case types.SET_SORTING: {
      return {
        ...state,
        sorting: payload,
      };
    }

    case types.RESET_FILTER_SORTING: {
      return initialState;
    }

    default:
      return state;
  }
};
