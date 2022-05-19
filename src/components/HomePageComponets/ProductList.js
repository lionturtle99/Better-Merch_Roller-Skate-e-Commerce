import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProduct } from '../../redux/actions/productActions';
import { Container, Alert } from 'react-bootstrap';
import Product from './Product';


const Products = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  if(loading) {
    return (
      <>
        <Container className="mt-5" style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gridGap: "1em"}}>
          {products.map((product, index) => <Product key={index} product={product} /> )}
        </Container>
      </>
    )
  } 
  else if (error) {
    return (
      <Alert className="text-center m-auto" variant="danger">{error.message}</Alert>
    )
  } 
  else {
    return (
      <h1 className="text-center position-absolute" style={{top: "50%", right: "50%",transform: "translate(50%, 50%)"}}>Loading...</h1>
    )
  }
}

export default Products;