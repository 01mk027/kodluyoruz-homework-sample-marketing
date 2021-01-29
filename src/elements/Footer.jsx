import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0" />

          <div className="container-fluid">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        © 2021 Copyright:
        <br />
        <a
          className="text-white"
          href="https://mustafa-kosmaz-ornek-firma-calisma.stackblitz.io"
        >
          <i>Sample Marketing</i>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
