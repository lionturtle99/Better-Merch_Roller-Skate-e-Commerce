import { 
  REGISTER_START,
  REGISTER_FAIL,
  REGISTER_SUCCESS, 
  LOGOUT_SUCCESS, 
  LOGIN_FAIL, 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_FAIL,
  SET_USER } from '../actions/actionTypes';
import { authorization as auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const registerStart = () => ({
  type: REGISTER_START,
});

const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user
});

const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error
});

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  paylaod: user
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error
});

const logOutStart = () => ({
  type: LOGOUT_START,
});

const logOutSuccess = (response) => ({
  type: LOGOUT_SUCCESS,
  paylaod: response
});

const logOutFail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error
});

export const setuser = (user) => ({
  type: SET_USER,
  payload: user
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

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logOutStart());
    signOut(auth)
      .then((response) => dispatch(logOutSuccess(response)))
      .catch(error => dispatch(logOutFail(error.message)))
  }
}