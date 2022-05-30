import './productDetails.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert, Carousel } from "react-bootstrap";
import Header from '../../Header';
import { addToCart } from '../../../redux/actions/cartActions';

const ProductDetails = ({ navigate, match, }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return (
    <>
      <Header/>
      <Container fluid className="pt-5 single-product">
        {loading ? (
          <h1 className="text-center position-absolute" style={{top: "50%", right: "50%",transform: "translate(50%, 50%)"}}>Loading...</h1>
        ) : error ? (
          <Alert className="text-center" variant="danger">Unknown error ocurred. Please try again later</Alert>
        ) : (
          <>
            <Row>
              <Col md={6}>
                <div className="single-image">
              <Carousel>
                    {product.images.map((image, index) => 
                      <Carousel.Item key={index}>
                        <div className="d-block align-items-center">
                          <img
                            className="d-flex w-100"
                            style={{height: "15em"}}
                            src={image.url}
                            alt={image.alt}
                          />
                        </div>
                      </Carousel.Item>
                    )}
                </Carousel>
                  <img src={product.image} alt={product.name} />
                </div>
              </Col>
              <Col md={6}>
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <Col lg={7} className="product-count">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.quantityInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                    </div>
                    {product.quantityInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.quantityInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <Button className="round-black-btn" onClick={() => dispatch(addToCart(product.id, qty))}>
                          Add To Cart
                        </Button>
                      </>
                    ) : null}
                  </Col>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
