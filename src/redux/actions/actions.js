import * as types from './actionTypes';
import { authorization as auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

export const addToCart = (item) => ({
  type: types.ADD_TO_BASKET,
  payload: item
})

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  payload: id
})

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  paylaod: user
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error
});

const logOutStart = () => ({
  type: types.LOGOUT_START,
});

const logOutSuccess = (response) => ({
  type: types.LOGOUT_SUCCESS,
  paylaod: response
});

const logOutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error
});

export const registerInitiate = (email, password) => {
  return function(dispatch) {
    dispatch(registerStart());
      createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  }
}

export const loginInitiate = (email, password) => {
  return function(dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  }
}

export const setuser = (user) => ({
  type: types.SET_USER,
  payload: user
});

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logOutStart());
    signOut(auth)
      .then((response) => dispatch(logOutSuccess(response)))
      .catch(error => dispatch(logOutFail(error.message)))
  }
}