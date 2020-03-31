import types from './types';

export const toggleIsSideNavOpen = () => ({
  type: types.TOGGLE_IS_SIDE_NAV_OPEN,
});

export const setIsSideNavOpen = (payload) => ({
  type: types.SET_IS_SIDE_NAV_OPEN,
  payload,
});
