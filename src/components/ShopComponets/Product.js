import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Button, Carousel } from 'react-bootstrap';
import { addToCart } from "../../redux/actions/cartActions";

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";

const Product = ({product}) => {

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    // const item = {
    //   id: 1,
    //   title: "Rainbow Shoulder Strap",
    //   description: "Rainbow rollerskate strap for you to sthrow over your shoulder and be proud!",
    //   images: [{url: img1, alt: "example text"}, {url: img2, alt: "example text"}, {url: img3, alt: "example text"}],
    //   price: 7.99
    // };
    dispatch(addToCart(item));
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
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
        <Card.Body>
          <Link className="text-decoration-none text-inherit" to={`/products/${product.id}`}>
            <Card.Title>{product.title}</Card.Title>
          </Link>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex">
            <p>Price: {product.price}</p>
            <Button variant="primary" onClick={() => addItemToCart(product)} >Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product;