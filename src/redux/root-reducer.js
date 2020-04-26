import { combineReducers } from 'redux';

import navigationReducer from './navigation/reducer';
import filterSortingReducer from './filter-sorting/reducer';

export default combineReducers({
  navigation: navigationReducer,
  filterSorting: filterSortingReducer,
});
