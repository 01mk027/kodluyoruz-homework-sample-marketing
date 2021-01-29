import React from "react";
import { useLocation, Link, Redirect } from "react-router-dom";
import products from "../data/products";

function LookForProduct(props) {
  //const location = useLocation();

  // Burda yapmak istediğimiz bir urlden veri çekmek
  const params = new URLSearchParams(useLocation().search);
  //const query = new URLSearchParams(useLocation().search)
  const q = params.get("q");
  //console.log(q);

  const productResults = products.productContent
    .filter(item => item.title.toLowerCase().includes(q.toLowerCase()))
    .map(item => (
      <li key={item.id} className="list-group-item">
        <Link to={`/products/${item.id}`}>{item.title}</Link>
      </li>
    ));
  const notF = (
    <>
      <h2>No match results</h2>
      <img
        src="https://image.shutterstock.com/image-vector/mosaic-radar-distressed-stamp-seals-600w-1635629275.jpg"
        className="img-fluid"
      />
    </>
  );

  let screen;
  if (productResults.length > 0) {
    screen = productResults;
  } else {
    screen = notF;
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home Page</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/products">Products</Link>
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <ul>{screen}</ul>
      </div>
    </div>
  );
}
export default LookForProduct;
