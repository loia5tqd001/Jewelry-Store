export const types = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (payload) => ({
  type: types.SET_CURRENT_USER,
  payload,
});

