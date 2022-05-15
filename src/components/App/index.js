import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import { Header } from '../Header';
import LandingPage from '../Landing';
import SignUpPage from '../Register';
import SignInPage from '../Register';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

// import { auth, provider } from '../../firebase.config';
// import { useDispatch, useSelector } from 'react-redux';
// import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../../redux/features/userSlice';


const App = () => {
  // const dispatch = useDispatch();

  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);

  // const handleSignIn = () => {
  //   auth.signInWithPopup(provider).then((result) => {
  //     dispatch(setActiveUser({
  //       userName: result.user.displayName,
  //       userEmail: result.user.email
  //     }))
  //   })
  // }

  // const handleSignOut = () => {
  //   auth.signOut().then(() => {
  //     dispatch(setUserLogOutState())
  //   }).catch((error) => alert(error.message))
  // }

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default App