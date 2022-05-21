import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const initialState = {
  cart: {
    cartItems: [],
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;