import * as actionTypes from '../actions/actionTypes';

const cartReducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_BASKET:
      const addCartState = [...state, action.payload];
      return addCartState;
    case actionTypes.REMOVE_FROM_BASKET:
        let removeCartState = [...state];
        const index = state.map(item => item.id === action.payload);
        removeCartState.slice(index, index + 1);
        return removeCartState;
    default:
      return state;
  }
};

export default cartReducer;