import React from "react";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
function NavBar(props) {
  const hist = useHistory();
  const inp = React.useRef();
  const linkss = props.linkObj
    .filter(item => item.isActive)
    .map(item => (
      <li key={item.id}>
        <Link to={item.address} className="nav-link">
          {item.title}
        </Link>
      </li>
    ));
  function sub() {
    //hist.push("/");
    event.preventDefault();
    //history.push(`/lookforproduct?q=${inputValue.current.value}`);
    hist.push(`/lookforproduct?q=${inp.current.value}`);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faCoffee} />
          <span> </span>
          Sample Marketing
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {linkss}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Find Product
              </a>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdown"
              >
                <form onSubmit={sub}>
                  <div className="form-group container-fluid d-flex justify-content-center">
                    <label htmlFor="search" className="bg-success inline-block">
                      Product Finding Tool
                    </label>
                    <input
                      name="q"
                      type="text"
                      className="form-control"
                      id="search"
                      placeholder="Type to search product"
                      ref={inp}
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-2"
                      onClick={sub}
                    >
                      Find
                    </button>
                  </div>
                </form>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
