import { 
  REGISTER_START,
  REGISTER_FAIL,
  REGISTER_SUCCESS,  
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SET_USER,
  USER_DETAILS_RESET,
  USER_DETAILS_FAIL,
  USER_DETAILS_START,
  USER_DETAILS_SUCCESS
} from '../actions/actionTypes';
import { authorization as auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// SET USER
export const setuser = (user) => ({
  type: SET_USER,
  payload: user
});

// REGISTER
export const registerInitiate = (email, password) => {
  return function(dispatch) {
    dispatch({type: REGISTER_START});
      createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({ 
          type: REGISTER_SUCCESS,
          payload: user
        });
      })
      .catch((error) => dispatch({  
        type: REGISTER_FAIL,
        payload: error
      }));
  }
}

// LOGIN INIT
export const loginInitiate = (email, password) => {
  return function(dispatch) {
    dispatch({type: LOGIN_START});
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({  
          type: LOGIN_SUCCESS,
          paylaod: user
        });
      })
      .catch((error) => dispatch({  
        type: LOGIN_FAIL,
        payload: error
      }));
  }
}

// LOGOUT INIT
export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch({type: LOGOUT_START});
    signOut(auth)
      .then((response) => dispatch({  
        type: LOGOUT_SUCCESS,
        paylaod: response
      }))
      .catch(error => dispatch({  
        type: LOGOUT_FAIL,
        payload: error
      }));
  }
}

// GET USER DETAILS
export const getUserDetails = (id) => {
  return function(dispatch) {
    dispatch({ type: USER_DETAILS_START });
    auth.currentUser.then((user) => {
      dispatch({ 
        type: USER_DETAILS_SUCCESS, 
        payload: user
      });
    })
    .catch((err) => dispatch({
      type: USER_DETAILS_FAIL,
      payload: err.message
    }));
  };
};