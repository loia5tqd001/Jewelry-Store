import { types } from './actions';
import { addProductToCart, removeProductFromCart, Takeout1ProductFromCart } from './utils';

const initialState = {
  items: [], // { product, amount }
  isInCart: true,
  guest: {
    gender: 'anh',
    name: '',
    phone: '',
    province: null,
    district: null,
    ward: null,
    street: '',
    requirement: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PRODUCT: {
      return {
        ...state,
        items: addProductToCart(state.items, payload),
      };
    }

    case types.TAKEOUT_1_PRODUCT: {
      return {
        ...state,
        items: Takeout1ProductFromCart(state.items, payload),
      };
    }

    case types.REMOVE_PRODUCT: {
      return {
        ...state,
        items: removeProductFromCart(state.items, payload),
      };
    }

    case types.EMPTY_CART: {
      return {
        ...state,
        items: [],
        isInCart: true,
      };
    }

    case types.SUBMIT_GUEST: {
      return {
        ...state,
        guest: payload,
        isInCart: false,
      };
    }

    default:
      return state;
  }
};
