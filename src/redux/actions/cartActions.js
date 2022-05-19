import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_ERROR,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
} from "./actionTypes";
import {
  doc,
  // query, where,
  // serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from "../../firebase.config";

const addToCartError = (error) => ({
  type: CART_ADD_ITEM_ERROR,
  payload: error
});

export const addToCart = (id, qty) => {
  return function(dispatch) {
    const docRef = doc(db, 'products', id)
    getDoc(docRef)
      .then(doc => {
        dispatch({ 
          type: CART_ADD_ITEM,
          payload: {
            id: doc.id,
            title: doc.title,
            description: doc.description,
            images: doc.images,
            price: doc.price,
            "qty": qty
          }
        });
      })
      .catch((error) => dispatch(addToCartError(error.message)));
  }
}

export const removeFromCart = (id) => {
  return function(dispatch) {
    dispatch({ 
      type: CART_REMOVE_ITEM, 
      payload: id 
    });
  }
};

