import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import cartReducer from './cartReducer';
import { userReducer, userDetailsReducer } from './userReducer';
import { productListReducer, productDetailsReducer } from './productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  userDetails: userDetailsReducer,
  cart: cartReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  firestore: firestoreReducer,

})

export default rootReducer;