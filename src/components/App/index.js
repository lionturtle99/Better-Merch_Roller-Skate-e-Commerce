import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { authorization } from '../../firebase.config';
import { setuser } from '../../redux/actions/userActions';

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../Home';
import SignUpPage from '../SignUpInOut/SignUp';
import SignInPage from '../SignUpInOut/SignIn';
import SignOutPage from '../SignUpInOut/SignOut';
import ProductListPage from '../ShopComponets/ProductList';
import CartPage from '../CartComponents/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    authorization.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    })
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App