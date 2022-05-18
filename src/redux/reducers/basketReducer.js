import * as actionTypes from '../actions/actionTypes';

const basketReducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_BASKET:
      const addBasketState = [...state, action.payload];
      return addBasketState;
    case actionTypes.REMOVE_FROM_BASKET:
        let removeBasketState = [...state];
        const index = state.map(item => item.id === action.payload);
        removeBasketState.slice(index, index + 1);
        return removeBasketState;
    default:
      return state;
  }
};

export default basketReducer;