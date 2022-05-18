// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { colRef } from '../../firebase.config';
import { getDocs } from '@firebase/firestore';
import { useState } from 'react';
import { Container } from 'react-bootstrap';


const Products = () => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState();

getDocs(colRef)
  .then(snapshot => {
    let docsSnapshot = [];
    snapshot.docs.forEach(doc => {
      docsSnapshot.push({ ...doc.data() });
    })
    setProducts(docsSnapshot);
    setLoaded(true);
  })
  .catch(err => {
    console.log(err.message);
  })

  if(loaded) {
    return (
      <>
        <Container className="mt-5" style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gridGap: "1em"}}>
          {products.map((product, index) => <Product key={index} product={product} /> )}
        </Container>
      </>
    )
  } else {
    return (
      <h1 className="text-center position-absolute" style={{top: "50%", right: "50%",transform: "translate(50%, 50%)"}}>Loading...</h1>
    )
  }

}

export default Products;