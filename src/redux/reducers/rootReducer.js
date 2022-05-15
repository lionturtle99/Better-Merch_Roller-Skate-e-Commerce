import { combineReducers } from 'redux';
import basketReducer from './reducer';
// import userReducer from './reducer';

const rootReducer = combineReducers({
  data: basketReducer,
})

export default rootReducer;