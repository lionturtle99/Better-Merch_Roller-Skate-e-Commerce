import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { authorization } from '../../firebase.config';
import { setUser } from '../../redux/actions/userActions';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import HomePage from '../Home';
import SignUpPage from '../User/SignUp';
import SignInPage from '../User/SignIn';
import SignOutPage from '../User/SignOut';
import ProductListPage from '../ProductsComponents';
import CartPage from '../Cart/Cart';
import ProductDetails from '../ProductsComponents/ProductDetails/ProductDetails';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    authorization.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    })
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App