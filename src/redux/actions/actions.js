import * as a from './actionTypes';
import { auth } from '../../firebase.config';

const registerStart = () => ({
  type: a.REGISTER_START,
});

const registerSuccess = () => ({
  type: a.REGISTER_SUCCESS,
});

const registerFail = () => ({
  type: a.REGISTER_FAIL,
});

export const registerInitiate = (email, password) => {
  return function(dispatch) {
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(registerSuccess(user));
    })
    .catch((error) => dispatch(registerFail(error.message)));
  }
}