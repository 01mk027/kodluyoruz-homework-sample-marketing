import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./style.css";
import linkObj from "./data/NavLinks";
import NavBar from "./elements/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./elements/Footer";

export default function App() {
  const lnks = linkObj.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.address}
      component={item.component}
    />
  ));
  return (
    <>
      <BrowserRouter>
        <NavBar linkObj={linkObj} />

        <Switch>
          {lnks}
          <Route path="*">
            <Redirect to="/NotExist" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
