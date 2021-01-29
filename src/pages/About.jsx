import React from "react";

function About(props) {
  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "purple" }}
      >
        <div className="row">
          <div className="col-6">
            <h1 className="display-6 text-light">
              Experienced Marketing Brand
            </h1>
            <p className="lead">
              Since XX years we have been serving on marketing. Apart from
              marketing, we know humanity, offering quality without expensive
              tools. Digital marketing gained new perspectives with us.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://image.shutterstock.com/image-photo/customer-experience-concept-soft-focus-600w-1074687401.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="col-6">
            <h4>MARKETING AWARDS</h4>
            <p>Many times of winning ACME marketing prize is pride of us</p>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://image.shutterstock.com/image-photo/image-little-gold-cup-concept-600w-576245266.jpg"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="col-6">
            <h4>RAPID DELIVERING</h4>
            <p>Over than XX countries we have product delivering points. </p>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://image.shutterstock.com/image-photo/image-little-gold-cup-concept-600w-576245266.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
