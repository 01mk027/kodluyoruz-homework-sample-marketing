import React from "react";
import products from "../data/products";
import ProductFrame from "../elements/ProductFrame";
import { Link } from "react-router-dom";

function Products(props) {
  const prods = products.productContent
    .filter(item => item.isSale)
    .map(item => (
      <div key={item.id}>
        <ProductFrame id={item.id} title={item.title} imgSrc={item.imgSrc} />
      </div>
    ));

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>

      {prods}
    </>
  );
}
export default Products;
