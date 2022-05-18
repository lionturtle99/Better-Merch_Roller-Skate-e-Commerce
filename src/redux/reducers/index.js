import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  firestore: firestoreReducer,

})

export default rootReducer;