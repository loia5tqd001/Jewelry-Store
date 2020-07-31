export const types = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  TAKEOUT_1_PRODUCT: 'TAKEOUT_1_PRODUCT',
  EMPTY_CART: 'EMPTY_CART',
  SUBMIT_GUEST: 'SUBMIT_GUEST',
};

export const addProduct = (payload) => ({
  type: types.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload) => ({
  type: types.REMOVE_PRODUCT,
  payload,
});

export const takeout1Product = (payload) => ({
  type: types.TAKEOUT_1_PRODUCT,
  payload,
});

export const emptyCart = () => ({
  type: types.EMPTY_CART,
});

export const submitGuest = (payload) => ({
  type: types.SUBMIT_GUEST,
  payload,
});
