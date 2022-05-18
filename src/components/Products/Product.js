import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Button } from 'react-bootstrap';
import ImageCarousel from '../ImageCarousel';
import { addToBasket } from "../../redux/actions/actions";

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";

const Product = ({product}) => {

  const dispatch = useDispatch();

  const addItemToBasket = (message) => {
    const item = {
      id: 1,
      title: "Rainbow Shoulder Strap",
      description: "Rainbow rollerskate strap for you to sthrow over your shoulder and be proud!",
      images: [{url: img1, alt: "example text"}, {url: img2, alt: "example text"}, {url: img3, alt: "example text"}],
      price: 7.99
    };
    dispatch(addToBasket(item));
    console.log(message);
  };

  return (
    <>
      <Card id={product.id} style={{ width: '18rem' }}>
        <div>
          <ImageCarousel className="card-img" images={product.images} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex">
            <p>Price: {product.price}</p>
            <Button variant="primary" onClick={() => addItemToBasket("Successfuly fired addItemToBasket")} >Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product;