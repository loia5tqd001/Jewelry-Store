import { createSelector } from 'reselect';

const selectNavigation = (state) => state.navigation;

export const selectIsSideNavOpen = createSelector(
  [selectNavigation],
  (navigation) => navigation.isSideNavOpen,
);