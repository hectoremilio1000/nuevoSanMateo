import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nav from "../components/Nav";

const Router = () => {
  const [current, setCurrent] = useState("home");
  useEffect(() => {
    setRoute();
    window.addEventListener("hashchange", setRoute);
    return () => window.removeEventListener("hashchange", setRoute);
  }, []);
  function setRoute() {
    const location = window.location.href.split("/");
    const pathname = location[location.length - 1];
    setCurrent(pathname ? pathname : "home");
  }
  return (
    <HashRouter>
      <Nav current={current} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/protected" />
        <Route exact path="/profile" />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
