import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProduct } from '../../redux/actions/productActions';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Product from './Product';
import Pagination from './Pagination';


const Products = ({ keyword, pagenumber }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <>
      {loading ? 
        <h1 className="text-center position-absolute" style={{top: "50%", right: "50%",transform: "translate(50%, 50%)"}}>Loading...</h1>
      : error ?
        <Alert className="text-center m-auto" variant="danger">{error.message}</Alert>
      :
        <Container>
          <Row className="my-5" style={{minHeight: "80vh"}}>
            <Col  
              style={{display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gridGap: "1em"}}>
              {products.map((product, index) => <Product key={index} product={product} /> )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Pagination
                      pages={pages}
                      page={page}
                      keyword={keyword ? keyword : ""}
                    />
            </Col>
          </Row>
        </Container>
      }
    </>
  )
}

export default Products;