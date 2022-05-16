import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerInitiate, loginInitiate } from '../../redux/actions/actions';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { SIGN_IN } from '../../constants/routes';
// import firebase from 'firebase';

const Register = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const { user, error } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      (setErrorMessage(error));
    }
  }, [error, dispatch]);

  const handleRegister = (event) => {
    event.preventDefault();
    // sign up logic
    dispatch(registerInitiate(emailRef.current.value, passwordRef.current.value));
    // sign in after signing up logic. This logic also makes the page navigate to landing page
    dispatch(loginInitiate(emailRef.current.value, passwordRef.current.value));
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {errorMessage && <Alert className="text-center" variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleRegister}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to={SIGN_IN}>Sign In</Link>
      </div>
    </>
  )
}

export default Register