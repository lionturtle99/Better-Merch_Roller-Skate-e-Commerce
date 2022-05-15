import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/actions/actions';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const emailRef = useRef();

  let dispatch = useDispatch();

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(registerInitiate(emailRef.current.value, passwordRef.current.value));
    // setEmail('');
    // setPassword('');
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
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
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Register