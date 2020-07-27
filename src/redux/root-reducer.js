import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navigationReducer from './navigation/reducer';
import filterSortingReducer from './filter-sorting/reducer';
import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';

// Sometimes new updates will break the app, due to stale data stored in localstorage
// This is for updating new key for data stored in localstorage
const keyVersions = ['jquery-store_v1'];

// only keyVersions[0] is the key being used, all are staled and need to be removed
keyVersions.slice(1).forEach((key) => {
  localStorage.removeItem('persist:' + key);
});

const persistConfig = {
  key: keyVersions[0],
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
  filterSorting: filterSortingReducer,
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);

// Followed this: https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/root-reducer.js
