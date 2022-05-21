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
  USER_DETAILS_SUCCESS,
  USER_DETAILS_START,
  USER_DETAILS_RESET,
  USER_DETAILS_FAIL
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: null,
  error: null,
}

export const userReducer = (state = initialState, action) => {
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

// USER DETAILS
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_START:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};