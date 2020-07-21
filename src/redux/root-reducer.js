import { combineReducers } from 'redux';

import navigationReducer from './navigation/reducer';
import filterSortingReducer from './filter-sorting/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  navigation: navigationReducer,
  filterSorting: filterSortingReducer,
  user: userReducer,
});
