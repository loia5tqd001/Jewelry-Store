import types from './types';
import { brands, products } from './data';

const initialState = {
  isSideNavOpen: false,
  brands,
  products,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_IS_SIDE_NAV_OPEN:
      return { ...state, isSideNavOpen: payload };

    case types.TOGGLE_IS_SIDE_NAV_OPEN:
      return { ...state, isSideNavOpen: !state.isSideNavOpen };

    default:
      return state;
  }
};
