import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as ROUTES from '../../constants/routes';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { logOutInitiate } from '../../redux/actions/actions';


export const Header = () => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);

  const handleAuth = () => {
    if(user) {
      dispatch(logOutInitiate());
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link className="text-center" style={{displayStyle: "none"}} to={ROUTES.LANDING}>Roller Skaters <span className="d-block">eCommerce</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Item>
                <Link className = "nav-link" onClick={user ? handleAuth : null} to={`${user ? ROUTES.HOME : ROUTES.SIGN_IN}`}>{user ? "Sign Out" : "Sign In" }</Link>
              </Nav.Item>
              <Nav.Item >
                <Link className = "nav-link" to={ROUTES.LANDING}>Landing</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className = "nav-link" to={ROUTES.HOME}>Home</Link>
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
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
