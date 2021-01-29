import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function ProductFrame(props) {
  return (
    <>
      <div className="card mb-5" key={props.id}>
        <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <Link to={`/products/${props.id}`} className="btn btn-info btn-block">
            <FontAwesomeIcon icon={faSearch} />
            <span> </span>
            VIEW DETAILS FOR PRODUCT
          </Link>
        </div>
      </div>
    </>
  );
}
export default ProductFrame;
