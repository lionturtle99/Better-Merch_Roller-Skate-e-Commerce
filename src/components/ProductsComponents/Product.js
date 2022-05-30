import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { productDetails } from "../../redux/actions/productActions"; 
import { addToCart } from "../../redux/actions/cartActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleGettingProductDetails = () => {
    dispatch(productDetails(product.id));
    navigate("/product");
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img onClick={handleGettingProductDetails} style={{float: "left", width: "inherit", height: "300px", objectFit: "cover"}} variant="top" src={product.images[0].url} />
        <Card.Body>
        <Link onClick={handleGettingProductDetails} className="text-decoration-none text-black" to={`/product`}><Card.Title>{product.title}</Card.Title></Link>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex align-items-end justify-content-bottom">
            <p>Price: {product.price}</p><span className="ms-5">In Stock</span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product;

// import img1 from "../../assets/images/img1.jpeg";
// import img2 from "../../assets/images/img2.jpeg";
// import img3 from "../../assets/images/img3.jpeg";

  // const addItemToCart = (item) => {
  //   const item = {
  //     id: 1,
  //     title: "Rainbow Shoulder Strap",
  //     description: "Rainbow rollerskate strap for you to sthrow over your shoulder and be proud!",
  //     images: [{url: img1, alt: "example text"}, {url: img2, alt: "example text"}, {url: img3, alt: "example text"}],
  //     price: 7.99
  //   };
  //   dispatch(addToCart(item));
  // };