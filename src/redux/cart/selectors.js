import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectItems = createSelector(
  [selectCart],
  (cart) => cart.items,
);

export const selectItemsInCart = createSelector(
  [selectCart],
  (cart) => cart.isInCart ? cart.items : [],
);

export const selectAmountProductInCart = createSelector(
  [selectItemsInCart],
  (items) =>
    items.reduce(
      (acc, cur) => acc + cur.amount,
      0),
);

export const selectTotalMoney = createSelector(
  [selectItems],
  (items) =>
    items.reduce(
      (acc, cur) => acc + cur.amount * (cur.product.salePrice || cur.product.price),
      0,
    ),
  );

export const selectTotalMoneyInCart = createSelector(
  [selectItemsInCart],
  (items) =>
    items.reduce(
      (acc, cur) => acc + cur.amount * (cur.product.salePrice || cur.product.price),
      0),
);

export const selectGuest = createSelector(
  [selectCart],
  (cart) => cart.guest,
);
