import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import productsReducer from './productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  productList: productsReducer,
  firestore: firestoreReducer,

})

export default rootReducer;