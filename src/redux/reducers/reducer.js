import * as type from './../actions/actionTypes';

const initialState = {
  loading: false,
  basket: [],
  user: null,
  error: null,
}

const basketReducer = (state = initialState, action) => {
  switch(action.type) {
    case type.REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case type.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case type.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default basketReducer;