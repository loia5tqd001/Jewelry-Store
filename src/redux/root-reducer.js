import { combineReducers } from 'redux';

import navigationReducer from './navigation/reducer';

export default combineReducers({
  navigation: navigationReducer,
});
