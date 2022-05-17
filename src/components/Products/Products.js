import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";

import Product from './Product';
import { addToBasket } from '../../redux/actions/actions';

const Products = ({
  id,
  title,
  description,
  images,
  price,
}) => {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const item = {
      id,
      title,
      description,
      images = [{url: img1, alt: "example text"}, {url: img2, alt: "example text"}, {url: img3, alt: "example text"}],
      price
    };
    dispatch(addToBasket(item));
  };

  return (
    <>
      <Container>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"}}>
          {products.map((product, index) => <Product id={index} props={product} /> )}
        </div>
      </Container>
    </>
  )

}

export default Products;