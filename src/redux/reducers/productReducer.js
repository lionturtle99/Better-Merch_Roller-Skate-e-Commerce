import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_START,
  PRODUCT_LIST_SUCCESS, } from "../actions/actionTypes";

  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_START:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

export default productsReducer;