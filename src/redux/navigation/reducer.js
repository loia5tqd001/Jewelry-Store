import { types } from './actions';

const initialState = {
  isSideNavOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_IS_SIDE_NAV_OPEN: {
      return { ...state, isSideNavOpen: payload };
    }

    case types.TOGGLE_IS_SIDE_NAV_OPEN: {
      return { ...state, isSideNavOpen: !state.isSideNavOpen };
    }

    default:
      return state;
  }
};
