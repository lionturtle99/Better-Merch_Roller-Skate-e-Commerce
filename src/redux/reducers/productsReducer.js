import * as types from "../actions/actionTypes";

const productsReducer = (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
  case types.BUY_PRODUCT:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default productsReducer;