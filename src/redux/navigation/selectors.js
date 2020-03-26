import { createSelector } from 'reselect';

const selectNavigation = (state) => state.navigation;

export const selectIsSideNavOpen = createSelector(
  [selectNavigation],
  (navigation) => navigation.isSideNavOpen,
);

export const selectBrands = createSelector(
  [selectNavigation],
  (navigation) => navigation.brands,
);

export const selectProducts = createSelector(
  [selectNavigation],
  (navigation) => navigation.products,
);