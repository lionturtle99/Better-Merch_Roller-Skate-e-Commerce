import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header";
import { addToCart } from "../../redux/actions/cartActions";
import './cart.css';
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const Cart = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const total = cartItems.reduce((a, i) => a + i.quantity * i.price, 0).toFixed(2);
  
  return (
    <>
      <Header />
      {/* Cart */}
      <Container style={{minHeight: "70vh", padding: "10em 0"}}>
        { cartItems ? (
          <>
            <Alert variant="primary" className="text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </Alert>
            {/* cartItems */} 
            { cartItems.map((item) => (
                <Row className="cart-item row">
                  <div className="remove-button d-flex justify-content-center align-items-center">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="cart-image col-md-3">
                    <img src={item.images[0].url} alt={item.images[0].alt} />
                  </div>
                  <Col className="cart-text col-md-5 d-flex align-items-center">
                    <Link to="#">
                      <h4>{item.title}</h4>
                    </Link>
                  </Col>
                  <Col className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                    <h6>QUANTITY</h6>
                    <select
                            value={item.quantityInStock}
                            onChange={(e) => dispatch(addToCart(item.id, e.target.value))}
                          >
                            {[...Array(item.quantityInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                  </Col>
                  <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                    <h6>PRICE</h6>
                    <h4>${item.price}</h4>
                  </div>
                </Row>
              ))
            }

            {/* End of cart items */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <Row className="cart-buttons d-flex align-items-center">
              <Link to="/" className="col-md-6 ">
                <Button>Continue Shopping</Button>
              </Link>
              <Col className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <Button>
                  <Link to="/shipping" className="text-white">
                    Checkout
                  </Link>
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Alert className="text-center mt-3">
              Your cart is empty
              <Link className="btn btn-success mx-5 px-5 py-3" to="/" style={{fontSize: "12px"}}>
                CONTINUE SHOPPING NOW
              </Link>
            </Alert>
          </>
        )}
      </Container>
    </>
  )
}

export default Cart;