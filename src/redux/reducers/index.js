import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import basketReducer from './basketReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
  products: productsReducer,
  firestore: firestoreReducer,

})

export default rootReducer;