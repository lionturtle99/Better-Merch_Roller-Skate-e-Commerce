import React from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";


export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Skate-etsy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Item>
                <Link className = "nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
              </Nav.Item>
              <Nav.Item >
                <Link className = "nav-link" to={ROUTES.LANDING}>Landing</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className = "nav-link" to={ROUTES.HOME}>Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className = "nav-link" to={ROUTES.ACCOUNT}>Account</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className = "nav-link" to={ROUTES.ADMIN}>Admin</Link>
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
