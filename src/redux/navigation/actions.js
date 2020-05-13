export const types = {
  SET_IS_SIDE_NAV_OPEN: 'SET_IS_SIDE_NAV_OPEN',
  TOGGLE_IS_SIDE_NAV_OPEN: 'TOGGLE_IS_SIDE_NAV_OPEN',
};

export const toggleIsSideNavOpen = () => ({
  type: types.TOGGLE_IS_SIDE_NAV_OPEN,
});

export const setIsSideNavOpen = (payload) => ({
  type: types.SET_IS_SIDE_NAV_OPEN,
  payload,
});
