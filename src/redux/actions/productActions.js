import { 
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_START,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_START,
  PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";
import {
  onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from "../../firebase.config";

const productListStart = () => ({
  type: PRODUCT_LIST_START,
});

const productListSuccess = (listOfProducts) => ({
  type: PRODUCT_LIST_SUCCESS,
  payload: listOfProducts
});

const productListFail = (error) => ({
  type: PRODUCT_LIST_FAIL,
  payload: error
});

export const listProduct = () => {
  return function(dispatch) {
    dispatch(productListStart());
    const colRef = collection(db, "products");
    onSnapshot(colRef).then(snapshot => {
      let docsSnapshot = [];
      snapshot.docs.forEach(doc => {
        docsSnapshot.push({ ...doc.data() });
      })
        dispatch(productListSuccess(docsSnapshot));
      })
      .catch(err => {
        dispatch(productListFail(err));
      })
  }
}

const productDetailsStart = () => ({
  type: PRODUCT_DETAILS_START,
});

const productDetailsSuccess = (product) => ({
  type: PRODUCT_DETAILS_SUCCESS,
  payload: product
});

const productDetailsFail = (error) => ({
  type: PRODUCT_DETAILS_FAIL,
  payload: error
});

export const productDetails = (id) => {
  return function(dispatch) {
    dispatch(productDetailsStart());
    const docRef = doc(db, 'products', id);
    const docRef = doc(colRef);
    getDoc(docRef).then(doc => {
      dispatch(productDetailsSuccess(doc));
    })
    .catch(err => {
      dispatch(productDetailsFail(err));
    })
  }
}