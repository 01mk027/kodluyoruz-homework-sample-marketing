import React from "react";
import emailjs from "emailjs-com";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ekfenog",
      "template_v9bis7p",
      e.target,
      "user_JHfU7PJf2QvsShOvx1hKE"
    )
    .then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Contact(props) {
  return (
    <>
      <div className="jumbotron">
        <div className="container-fluid">
          <h1 className="text-center">
            <b>IMAGINARY OWNER</b>
          </h1>
        </div>

        <h5 className="text-center">Mustafa KOŞMAZ</h5>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-6" style={{ margin: "auto" }}>
              <a href="https://www.facebook.com/01mk027" target="blank">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  style={{ float: "left" }}
                />
              </a>
            </div>
            <div className="col-6">
              <a href="https://www.linkedin.com/in/neverrun/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} style={{ float: "left" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4" />
        <div className="col-sm-4 col-md-4 col-lg-4" />
      </div>
      <header className="mt-5">
        <div className="container-fluid">
          <p>
            Dear visitor! You can send email to imaginary owner by filling
            inputs and submitting form which is positioned below
          </p>
        </div>
      </header>
      <div>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                />
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info mb-5"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
