import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
function Home(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-primary">
        <div className="container-fluid">
          <h1 className="display-4 text-light justify-content-center">
            Serving is our business.
          </h1>
          <p className="lead justify-content-center">
            We consider customers demand like ours. We are family.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-4 justify-content-center">
          <div className="container">
            <FontAwesomeIcon icon={faShippingFast} />
            <p>
              Fast delivering system is enabled on transporting products.
              Products are reached in a short time to our customers without any
              problem.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div className="container">
            <FontAwesomeIcon icon={faHandshake} />
            <p>
              Customer care services are available 24 hours to deal with
              problems of our valuable customers.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div className="container">
            <FontAwesomeIcon icon={faRecycle} />
            <p>
              Refunding products are dealt with our individual services. If
              refunding reason is acceptable, than to refund bought product is
              possible.
            </p>
          </div>
        </div>
      </div>
      <div class="jumbotron jumbotron-fluid bg-success">
        <div class="row">
          <div className="col-6">
            <h1 class="display-6 justify-content-center">
              Discounts are there for shopping with credit card.
            </h1>
            <p class="lead">
              Price of shopping with credit cards are discounted up to %25. In
              addition, extra-special discounts for special customers are there.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://image.shutterstock.com/image-vector/discount-offer-tag-icon-shopping-600w-1208529259.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div
        class="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "violet" }}
      >
        <div class="row">
          <div className="col-6">
            <img
              src="https://image.shutterstock.com/image-vector/supermarket-shopping-cart-600w-492937003.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <h1 class="display-6 justify-content-center">
              Products of various brands are there in here.
            </h1>
            <p class="lead">
              We sell products of various brands. From products of famous brands
              to product of non-famous brands many stuffs are selected for
              customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
