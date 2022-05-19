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

const initialState = {
  loading: false,
  user: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
    case LOGIN_START:
    case LOGOUT_START:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: 
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;