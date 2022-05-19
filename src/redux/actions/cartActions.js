import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
} from "../Constants/CartConstants";
import { doc, getDocs, getDoc } from "firebase/firestore";

export const addToCart = (id, qty) => {
  return function(dispatch, getstate) {
    dispatch({

    });
      createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  }
}

export const removeFromCart = (item) => ({
  type: CART_REMOVE_ITEM,
  payload: item
})

export const removeFromCart = () => ({
  type: CART_CLEAR_ITEMS,
})

getDocs(colRef)
  .then(snapshot => {
    let docsSnapshot = [];
    snapshot.docs.forEach(doc => {
      docsSnapshot.push({ ...doc.data() });
    })
    setProducts(docsSnapshot);
    setLoaded(true);
  })
  .catch(err => {
    console.log(err.message);
  })