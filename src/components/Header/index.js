import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Navbar, Container, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { logOutInitiate } from '../../redux/actions/userActions';
import logo from '../../assets/images/bm-blue-logo.png';
import './header.css';


const Header = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleSingOut = () => {
    if(user) {
      dispatch(logOutInitiate());
    }
  }

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  }

  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="ms-5" href="/" ><img style={{width: "4em", borderRadius: "100%"}} src={logo} alt="e-Skate shop logo"></img></Navbar.Brand>
          <Link className="nav-link text-white" to="/shop" >Home</Link>
          <Form onSubmit={searchHandler} className="d-flex m-auto w-50">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          {user ?  
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <span style={{fontSize: "0.9em"}}>Welcome </span><i className="fas fa-user"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleSingOut} href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          : 
            <div className="login-button" variant="light">
              <Link 
                className="nav-link text-black" 
                to="/signin">
                  <span style={{fontSize: "0.9em"}}>SignIn </span><i className="fas fa-user"></i>
                </Link>
            </div> 
          }
          <Link to="/cart" className="ms-2 me-5" style={{positions: 'relative'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <span className="badge">{cartItems.length}</span>
          </Link>
      </Container>
    </Navbar>
  )
};

export default Header;