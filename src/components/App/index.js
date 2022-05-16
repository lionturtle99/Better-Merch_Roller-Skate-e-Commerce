import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import { authorization } from '../../firebase.config';
import { setuser } from '../../redux/actions/actions';

import { Header } from '../Header';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';




const App = () => {
  let dispatch = useDispatch();
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
        <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App