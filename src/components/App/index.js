import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import { authorization } from '../../firebase.config';
import { setuser } from '../../redux/actions/actions';

import { Header } from '../Header';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutPage from '../SignOut';
import HomePage from '../Home';




const App = () => {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   authorization.onAuthStateChanged((authUser) => {
  //     if(authUser) {
  //       dispatch(setuser(authUser));
  //     } else {
  //       dispatch(setuser(null));
  //     }
  //   })
  // }, [dispatch]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App