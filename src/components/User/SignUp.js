import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerInitiate, loginInitiate } from '../../redux/actions/userActions';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
// import firebase from 'firebase';

const Register = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
      <Header />
      <Container 
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh" }} 
      >
        <Card className="px-3 py-5">
          <Card.Body style={{ minWidth: "25em" }}>
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
              <Button className="w-100 mt-5" type="submit">Sign Up</Button>
            </Form>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/signin">Sign In</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Register