import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
function ProductDetail(props) {
  const prm = useParams();
  const prID = Number(prm.proID);
  const prodct = products.productContent
    .filter(item => item.id == prID)
    .map(item => (
      <div className="container" key={item.id}>
        <h1 className="text-center">{item.title}</h1>
        <img src={item.imgSrc} className="img-fluid" alt="Responsive image" />
        <p>{item.detail}</p>
      </div>
    ));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product Details
          </li>
        </ol>
      </nav>
      {prodct}
    </div>
  );
}
export default ProductDetail;
