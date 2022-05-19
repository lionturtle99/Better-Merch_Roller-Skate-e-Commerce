import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginInitiate } from '../../redux/actions/userActions';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const SignIn = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const { user, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate("/shop");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      (setErrorMessage(error));
    }
  }, [error, dispatch]);

  const handleSignIn = (event) => {
    event.preventDefault();
    dispatch(loginInitiate(emailRef.current.value, passwordRef.current.value));
  }

  return (
    <Container 
    className="d-flex align-items-center justify-content-center" 
    style={{ minHeight: "100vh" }} 
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {errorMessage && <Alert className="text-center" variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSignIn}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Signin
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">signup</Link>
      </div>
    </Container>
  )
}

export default SignIn