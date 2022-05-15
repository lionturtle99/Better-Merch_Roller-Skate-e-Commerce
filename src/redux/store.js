import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './features/userSlice';


// export default configureStore({
//   reducer: {
//     user: userReducer
//   }
// })



