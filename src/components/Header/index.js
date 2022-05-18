import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { logOutInitiate } from '../../redux/actions/actions';


export const Header = () => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleAuth = () => {
    if(user) {
      dispatch(logOutInitiate());
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link className="text-center text-decoration-none text-white" to="/">Roller Skaters <span className="d-block">eCommerce</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navbar navbar-dark bg-dark me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Item>
                <Link className="nav-link text-white" onClick={user ? handleAuth : null} to={`${user ? "/signout" : "/signin"}`}>{user ? "Sign Out" : "Sign In" }</Link>
              </Nav.Item>
              <Nav.Item >
                <Link className="nav-link text-white" to="/" >Landing</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link text-white" to="/home" >Home</Link>
              </Nav.Item>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
