import { 
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_START,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_START,
  PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";
import {
  doc,
  getDoc,
  collection,
  getDocs,
} from 'firebase/firestore'
import { db } from "../../firebase.config";

// PRODUCT LIST
export const listProduct = () => {
  return function(dispatch) {
    dispatch({type: PRODUCT_LIST_START});
    const colRef = collection(db, "products");
    getDocs(colRef).then(snapshot => {
      let docsSnapshot = [];
      snapshot.docs.forEach(doc => {
        docsSnapshot.push({ ...doc.data(), id: doc.id });
      })
        dispatch({  
          type: PRODUCT_LIST_SUCCESS,
          payload: docsSnapshot
        });
      })
      .catch(err => {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: err
        });
      })
  }
}

// PRODUCT DETAILS
export const productDetails = (id) => {
  return function(dispatch) {
    dispatch({type: PRODUCT_DETAILS_START});
    const docRef = doc(db, 'products', id);
    getDoc(docRef).then(doc => {
      dispatch({  
        type: PRODUCT_DETAILS_SUCCESS,
        payload: doc.data()
      });
    })
    .catch(err => {
      dispatch({  
        type: PRODUCT_DETAILS_FAIL,
        payload: err.message
      });
    })
  }
}