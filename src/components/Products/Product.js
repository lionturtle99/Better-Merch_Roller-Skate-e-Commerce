import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import ImageCarousel from '../ImageCarousel';

const Product = ({ id, title, description, images, price }) => {
  return (
    <>
      <Card id={id} style={{ width: '18rem' }}>
        <ImageCarousel className="card-img" images={images} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex">
            <p>Price: {price}</p>
            <Button variant="primary" className="ml-auto">Add to Cart</Button>
          </div>
          
        </Card.Body>
      </Card>
    </>
  )
}