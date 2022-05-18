// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Product from './Product';

const Products = () => {

  // useFirestoreConnect([
  //   { collection: 'products' }
  // ]);

  // const products = useSelector(state => state.firestore.ordered.products);

  // if(isLoaded(products)) {
    // return (
    //   <>
    //     <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"}}>
    //       {products.map((product, index) => <Product key={index} props={product} /> )}
    //     </div>
    //   </>
    // )
  // } else {
    return (
    "  hello home"
      // <h1 className="text-center position-absolute top-50 left-50" style={{transform: "translate(50%, 50%)"}}>Loading...</h1>
    )
  // }

}

export default Products;